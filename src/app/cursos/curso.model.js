"use strict";
class Curso {
    constructor(
        // public id: number,
        // public nome: string,
        // public email: string,
        // public telefone: string
        Id, Status, Name, Quantity, Description, IdEmpresa, NomeEmpresa) {
        this.Id = Id;
        this.Status = Status;
        this.Name = Name;
        this.Quantity = Quantity;
        this.Description = Description;
        this.IdEmpresa = IdEmpresa;
        this.NomeEmpresa = NomeEmpresa;
    }
}
exports.Curso = Curso;
class Empresa {
    constructor(IdEmpresa, NomeEmpresa) {
        this.IdEmpresa = IdEmpresa;
        this.NomeEmpresa = NomeEmpresa;
    }
}
exports.Empresa = Empresa;
class CursoAux {
    constructor(
        // public id: number,
        // public nome: string,
        // public email: string,
        // public telefone: string
        Id, Status, Name, Quantity, Description, IdEmpresa, NomeEmpresa) {
        this.Id = Id;
        this.Status = Status;
        this.Name = Name;
        this.Quantity = Quantity;
        this.Description = Description;
        this.IdEmpresa = IdEmpresa;
        this.NomeEmpresa = NomeEmpresa;
    }
}
exports.CursoAux = CursoAux;
//# sourceMappingURL=curso.model.js.map