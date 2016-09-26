import Html exposing (Html, h1, button, div, text)
import Html.App as App
import Html.Events exposing (onClick)
import Http
import Task exposing (Task)
import Json.Decode as Decode

type alias Model = {
  name: String,
  loading: Bool
}

init : ( Model, Cmd Msg )
init = ( { name = "Hello", loading = False }, Cmd.none )

type Msg
  = Fetch
  | FetchSuccess String
  | FetchError Http.Error

decode = Decode.at [ "name" ] Decode.string

fetchTask : Task Http.Error String
fetchTask =
  Http.get decode "/ajax"

fetchCmd : Cmd Msg
fetchCmd =
  Task.perform FetchError FetchSuccess fetchTask

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    Fetch ->
      ( { model | loading = True }, fetchCmd )
    FetchSuccess name ->
      ( { name = name, loading = False }, Cmd.none )
    FetchError error ->
      ( { name = toString error, loading = False }, Cmd.none )

view : Model -> Html Msg
view model =
  if model.loading then
    h1 [] [ text "Loading..." ]
  else
    div [] [
      h1 [] [ text model.name ],
      button [ onClick Fetch ] [ text "Update" ]
    ]

main : Program Never
main =
  App.program
    { init = init
    , view = view
    , update = update
    , subscriptions = (always Sub.none)
    }
