"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
const Observable_1 = require("rxjs/Observable");
let CursoService = class CursoService {
    constructor(http) {
        this.http = http;
        // private apiUrl: string = 'app/cursos'; 
        this.apiUrl = 'http://localhost:50600/api/Curso';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
    getCursos() {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json()) //AUGUSTO FICAR DE OLHO NESSE .data NA CHAMADA REAL DA API
            .catch(this.handleError);
    }
    getCurso(id) {
        return this.getCursos()
            .then((contatos) => contatos.find(contato => contato.Id === id));
    }
    // getCursosTeste(): Observable<Curso[]> {
    //     return this.http.get(this.apiUrl)
    //         .map((response: Response) => <any[]> response.json() as Curso[])
    //          .catch(this.handleErrorObs)
    //         ;
    // }
    // getCursos(): Promise<Curso[]> {
    //     return this.http.get(this.apiUrl)
    //         .toPromise()
    //         .then(response => response.json() as Curso[]) //FICAR DE OLHO NESSE .data NA CHAMADA REAL DA API (AUGUSTO)
    //         .catch(this.handleError);
    // }
    // getCurso(id: number): Observable<Curso> {
    //     return this.getCursosTeste()
    //     .map((cursos: Curso[]) => cursos.find(curso => curso.Id === id))
    //         // .then((cursos: Curso[]) => cursos.find(curso => curso.Id === id));
    // }
    create(curso) {
        return this.http
            .post(this.apiUrl, JSON.stringify(curso), { headers: this.headers })
            .toPromise()
            .then((reponse) => { return reponse.json().data; })
            .catch(this.handleError);
    }
    update(curso) {
        const url = `${this.apiUrl}/${curso.Id}`;
        return this.http
            .put(url, JSON.stringify(curso), { headers: this.headers })
            .toPromise()
            .then(() => curso)
            .catch(this.handleError);
    }
    delete(curso) {
        const url = `${this.apiUrl}/${curso.Id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => curso)
            .catch(this.handleError);
    }
    handleError(err) {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    }
    handleErrorObs(error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    }
    // getCursosSlowly(): Promise<Curso[]> {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(resolve, 1000);
    //     }).then(() => this.getCursos());
    // }
    search(term) {
        return this.http
            .get(`${this.apiUrl}/?nome=${term}`)
            .map((res) => res.json().data);
    }
};
CursoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CursoService);
exports.CursoService = CursoService;
//# sourceMappingURL=curso.service.js.map