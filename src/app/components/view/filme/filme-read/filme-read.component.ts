import { FilmeService } from './../filme.service';
import { Filme } from './../filme.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme-read',
  templateUrl: './filme-read.component.html',
  styleUrls: ['./filme-read.component.css']
})
export class FilmeReadComponent implements OnInit {
  filme: Filme[]=[]
  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'duracao','imagem','acoes'];

  constructor(private service:FilmeService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta =>{
      this.filme=resposta;
    })
  }

}
