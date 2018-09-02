export class Curso {
   
    constructor(
        public Id: number,
        public Status: string,
        public Name: string,
        public Quantity: string,
        public Description: string,
        public IdEmpresa: number,
        public NomeEmpresa: string

    ) {}
}

export class Empresa {
    constructor(
        public IdEmpresa: number,
        public NomeEmpresa: string
    ) {}
}
