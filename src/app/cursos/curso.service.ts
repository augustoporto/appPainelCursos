import { Injectable } from '@angular/core';
import { Curso } from './curso.model'
import { Http, Headers, Response } from '@angular/http'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CursoService {

        private apiUrl: string = 'http://localhost:50600/api/Curso';
        private headers: Headers = new Headers({
            'Content-Type': 'application/json'
        });

        constructor(
            private http: Http
        ) {}

        getCursos(): Promise<Curso[]> {  
            return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json() as Curso[]) 
            .catch(this.handleError);
        }

        getCurso(id: number): Promise<Curso> {
            return this.getCursos()
                .then((contatos: Curso[]) => contatos.find(contato => contato.Id === id));
        }

        create(curso: Curso): Promise<Curso> {
            return this.http
            .post(this.apiUrl, JSON.stringify(curso), {headers: this.headers})
            .toPromise()
            .then((reponse: Response) => { return reponse.json().data as Curso; })
            .catch(this.handleError);
        }

        update(curso: Curso): Promise<Curso> {
            const url = `${this.apiUrl}/${curso.Id}`;
            return this.http
            .put(url, JSON.stringify(curso), {headers: this.headers})
            .toPromise()
            .then(() =>  curso as Curso )
            .catch(this.handleError);
        }

        delete(curso: Curso): Promise<Curso> {
            const url = `${this.apiUrl}/${curso.Id}`;
            return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() =>  curso as Curso )
            .catch(this.handleError);
        }

        private handleError(err: any): Promise<any> {
            console.log('Error: ', err);
            return Promise.reject(err.message || err);
        }

        private handleErrorObs(error: Response) {
            console.error(error);
            return Observable.throw(error.json().error || 'Server error');
        }

        search(term: string): Observable<Curso[]> {
            return this.http
                .get(`${this.apiUrl}/?nome=${term}`)
                .map((res: Response) => res.json().data as Curso[]);
        }
}