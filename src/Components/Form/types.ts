export interface IErrors {
  nameError: string;
  dateError: string;
  countryError: string;
  sexError: string;
  agreeError: string;
  fileError: string;
}

export interface IFormState {
  message: string;
  errors: IErrors;
}

export type Props = Record<string, never>;

export interface IData {
  id?: string;
  name?: string;
  birthday?: string;
  country?: string;
  gender?: string;
  agree?: string;
  file?: string;
}

export type FormData = {
  cards: IData[];
};

export type FormProps = {
  refreshCards: (card: IData) => void;
};
