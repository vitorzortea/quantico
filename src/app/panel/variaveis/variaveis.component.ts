import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-variaveis',
  templateUrl: './variaveis.component.html',
  styleUrls: ['./variaveis.component.styl']
})
export class VariaveisComponent implements OnInit {

  formFilter: FormGroup;
  problamaLista: string[] = ['Problema 1', 'Problema 2', 'Problema 3', 'Problema 4', 'Problema 5', 'Problema 6'];
  tipoVarList: string[] = ['Tipo 1', 'Tipo 2', 'Tipo 3', 'Tipo 4', 'Tipo 5', 'Tipo 6'];
  problemasSelect: any = [];
  tipoSelect: any = [];
  chipSelect = false;
  activeFilter = false;

  arrayVariaveis = [
    { variavel: 'Variável 1', tipo: 'Tipo 1', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 2', tipo: 'Tipo 2', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 3', tipo: 'Tipo 3', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 4', tipo: 'Tipo 4', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 5', tipo: 'Tipo 5', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 6', tipo: 'Tipo 6', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 7', tipo: 'Tipo 1', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 8', tipo: 'Tipo 3', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 9', tipo: 'Tipo 2', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 10', tipo: 'Tipo 4', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 11', tipo: 'Tipo 5', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 12', tipo: 'Tipo 6', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 13', tipo: 'Tipo 2', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 14', tipo: 'Tipo 4', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 15', tipo: 'Tipo 3', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 16', tipo: 'Tipo 2', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 17', tipo: 'Tipo 5', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 18', tipo: 'Tipo 6', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 19', tipo: 'Tipo 3', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 20', tipo: 'Tipo 4', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 21', tipo: 'Tipo 2', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 22', tipo: 'Tipo 1', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
    { variavel: 'Variável 23', tipo: 'Tipo 3', relevancia: 'Relevância', descricao: 'Lorem ipsum dolor.'},
  ];

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.formFilter = this.fb.group({
      problemas: new FormControl(''),
      tipoVars: new FormControl(''),
    });
  }
  toggleFilter() {
    document.querySelectorAll('.menu-filter')[0].classList.toggle('active');
    document.querySelectorAll('#active-menu-filter')[0].classList.toggle('active');
  }

  editChip(array) {
    if (array === 1) {
      this.problemasSelect = this.formFilter.value.problemas;
    } else if (array === 2) {
      this.tipoSelect = this.formFilter.value.tipoVars;
    }
    if (this.problemasSelect[0] === undefined && this.tipoSelect[0] === undefined) {
      this.chipSelect = false;
    } else {
      this.chipSelect = true;
    }
  }
  deleteChip(item, array) {
    if (array === 1) {
      const index =  this.formFilter.value.problemas.findIndex((e) => e === item);
      this.formFilter.value.problemas.splice(index, 1);
      this.formFilter.controls.problemas.setValue(this.formFilter.value.problemas);
    } else if (array === 2) {
      const index =  this.formFilter.value.tipoVars.findIndex((e) => e === item);
      this.formFilter.value.tipoVars.splice(index, 1);
      this.formFilter.controls.tipoVars.setValue(this.formFilter.value.tipoVars);
    }
    if (this.problemasSelect[0] === undefined && this.tipoSelect[0] === undefined) {
      this.chipSelect = false;
    } else {
      this.chipSelect = true;
    }
  }
  deleteAllChips() {
    this.formFilter.controls.problemas.setValue([]);
    this.formFilter.controls.tipoVars.setValue([]);
    this.problemasSelect = [];
    this.tipoSelect = [];
    this.chipSelect = false;
  }

}
