interface IContact {
  id: string;
  name: string;
  email1: string;
  email2: string | null;
  phone1: string;
  phone2: string | null;
}

export const contacts: IContact[] = [
  {
    id: "sjkdfwaiuervnns",
    name: "Matheus Henrique Vieira Cardoso",
    email1: "matheusth.arte@gmail.com",
    email2: "matheusth.dev@gmail.com",
    phone1: "81996732411",
    phone2: "81995773847",
  },
  {
    id: "aspdoqpowe",
    name: "Jessica Ferreira de Souza Vieira",
    email1: "contatojessvieira@gmail.com",
    email2: null,
    phone1: "81996732411",
    phone2: "81995773847",
  },
  {
    id: "dfssafqqefaçsld",
    name: "Rocky e Meg linda",
    email1: "rockinholindo@gmail.com",
    email2: null,
    phone1: "81996732411",
    phone2: null,
  },
];
