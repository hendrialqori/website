import type { ProjectTypes } from "../types"

enum ActionTypes  {
    SHOWMODALPROJECT = 'showModalProject',
    SETMODALPROJECT = 'setModalProject'  
}

type Action = 
     { type: typeof ActionTypes.SHOWMODALPROJECT } |
     { type: typeof ActionTypes.SETMODALPROJECT, payload: ProjectTypes }

export { ActionTypes }
export type { Action } 