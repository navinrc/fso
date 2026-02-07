sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa <br /> payload: {"content":"sometext","date":"2026-02-07T12:44:46.359Z"}
    activate server
    server-->>browser: {"message":"note created"}
    deactivate server

    Note right of browser: The browser executes the callback function registered to onsubmit event from the already fetched js file on initial page load.<br />And no new HTTP calls were made to re-render the whole page.<br/> This callback sends a POST request with the payload JSON object to the server.
