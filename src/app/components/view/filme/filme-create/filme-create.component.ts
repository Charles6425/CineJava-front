import { FilmeService } from './../filme.service';
import { Filme } from './../filme.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-filme-create',
  templateUrl: './filme-create.component.html',
  styleUrls: ['./filme-create.component.css']
})
export class FilmeCreateComponent implements OnInit {  
  filme:Filme={
    imagem:'',
    titulo:'',
    descricao:'',
    duracao:''  

  }
 
  constructor(private service:FilmeService, private router: Router) { }

  ngOnInit(): void {
    
  }

  create():void{
    this.service.create(this.filme).subscribe((resposta)=>{
      this.router.navigate(['filmes']);
      this.service.mensagem("Filme cadastrado com sucesso!")
    })
  }

}
