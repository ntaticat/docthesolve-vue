export interface ITicket {
  ticketId: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  selectedByAgent: boolean;
  solved: boolean;
  watchers: number;
  categories?: any[];
  notifications?: any[];
  problems?: any[];
}
