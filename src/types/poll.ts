 
export interface Poll {
    id: string
    title: string
    created_by: string
    created_at: string
  }
  
  export interface Option {
    id: string
    poll_id: string
    text: string
    votes: number
  }
  