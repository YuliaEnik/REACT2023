import { IData } from "../../Components/Card";
import { IModalCard } from "../../Components/CardModal";

export type IDataApi = {
  search: string;
  cardApiData: IData[];
  isLoading: boolean;
  errorMsg: string;
};
export interface IDataModal {
  loading?: boolean;
  repos?: IModalCard[] | null;
}
