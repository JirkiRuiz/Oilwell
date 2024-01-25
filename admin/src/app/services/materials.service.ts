import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MaterialsService   {
    public apiUrl;
     
  constructor(
    private _http: HttpClient,
  ) { 
    this.apiUrl = GLOBAL.apiUrl;
  }

  registro_materiales_admin(data: any):Observable<any>{ 
    let headers = new HttpHeaders({
       'Content-Type':'application/json',
    });
    

    const fd = new FormData();
    //Creacion de constante para poder enviar toda la data mediante la clase formData.
    fd.append('titulo', data.titulo);
    fd.append('categoria', data.categoria);
    fd.append('stock', data.stock);
    fd.append('estado', data.estado);
    
  
    return this._http.post(this.apiUrl+'registro_materiales_admin',data,{headers:headers});

  }

  listar_materiales_admin(filtro: string):Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.apiUrl+'listar_materiales_admin/'+filtro,{headers:headers});//Como es de tipo get no le debes de pasar nada, porque solo es consulta, por eso no se usa el data.
  }

  // obtener_materiales_admin(id, token):Observable<any> {
  //   let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
  //   return this._http.get(this.url+'obtener_producto_admin/'+id,{headers:headers});//Como es de tipo get no le debes de pasar nada, porque solo es consulta, por eso no se usa el data.
  // }

  actualizar_materiales_admin(data: any, id: string):Observable<any>{ //Nomas el token para verificair que sea un usuario autenticado que registre la data.
    if(data.portada){
      let headers = new HttpHeaders();
    
      const fd = new FormData();
      //Creacion de constante para poder enviar toda la data mediante la clase formData.
      fd.append('titulo', data.titulo);
      fd.append('categoria', data.categoria);
      fd.append('stock', data.stock);
      fd.append('estado', data.estado);
      
    return this._http.put(this.apiUrl+'actualizar_materiales_admin/'+id,fd,{headers:headers});//Por parametro del metodo http le mando la data, se esta enviando inforamcion por eso estipo post, estamos adnadno data por parametro
    
    }else{
      let headers = new HttpHeaders();
      return this._http.put(this.apiUrl+'actualizar_materiales_admin/'+id,data,{headers:headers});//Por parametro del metodo http le mando la data, se esta enviando inforamcion por eso estipo post, estamos adnadno data por parametro
    
    }
  }

  eliminar_materiales_admin(id:string):Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.delete(this.apiUrl+'eliminar_materiales_admin/'+id,{headers:headers});//Como es de tipo get no le debes de pasar nada, porque solo es consulta, por eso no se usa el data.
  }

  listar_categorias():Observable<any>{
    let headers = new HttpHeaders().set('Content-type','application/json');

    return this._http.get(this.apiUrl+'listar_categorias/',{headers:headers});
  }

}
