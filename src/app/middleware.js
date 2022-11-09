import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { updateAnswer } from "../components/Case/feature/IdentifyMarkerSlice";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(updateAnswer),
  effect: (action, listenerApi) => {
    localStorage.setItem(
        listenerApi.getState().case.caseId,
        JSON.stringify((listenerApi.getState().identifyMarkers.answers))
    )
  }

});
