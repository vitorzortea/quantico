import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { VariaveisService } from 'src/app/services/variaveis.service';


@Component({
  selector: 'app-variaveis',
  templateUrl: './variaveis.component.html',
  styleUrls: ['./variaveis.component.styl']
})
export class VariaveisComponent implements OnInit {

  formFilter: FormGroup;
  tipoVarList: string[] = [];
  problemasSelect: any = [];
  tipoSelect: any = [];
  chipSelect = false;
  activeFilter = false;

  variaveis: any;
  variaveisView: any;
  variaveisCSV: string;
  lengthSelect = 0;

  arrayVariaveis: any;

  constructor(
    private fb: FormBuilder,
    public variaveisService: VariaveisService
  ) { }

  ngOnInit() {
    this.formFilter = this.fb.group({
      problemas: new FormControl(''),
      tipoVars: new FormControl(''),
    });
    this.variaveisService.getVariavel().subscribe(
      (res) => {
        this.variaveis = res;
        this.variaveis.map(e => { Object.assign(e, {select: false}); });
        this.variaveisView = this.variaveis;
        console.log(this.variaveisView);
        this.variaveis.forEach((e: any) => {
          if ( !this.tipoVarList.find( (ee: any) => ee === e.pessoa )) {
            this.tipoVarList.push(e.pessoa);
          }
        });
      },
      (error) => console.log(error)
    );
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
      this.variaveisView = this.variaveis;
    } else {
      this.chipSelect = true;
      this.variaveisView = [];
      this.variaveis.forEach(e => {
        if ( this.tipoSelect.includes(e.pessoa) ) {
          console.log(e)
          this.variaveisView.push(e);
        }
      });
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
      this.variaveisView = this.variaveis;
    } else {
      this.chipSelect = true;
      this.variaveisView = [];
      this.variaveis.forEach(e => {
        if ( this.tipoSelect.includes(e.pessoa) ) {
          console.log(e)
          this.variaveisView.push(e);
        }
      });
    }
  }
  deleteAllChips() {
    this.formFilter.controls.problemas.setValue([]);
    this.formFilter.controls.tipoVars.setValue([]);
    this.problemasSelect = [];
    this.tipoSelect = [];
    this.chipSelect = false;
    this.variaveisView = this.variaveis;
  }

  selectAll() {
    if ( !this.variaveisView.find( (ee: any) => ee.select === false ) ) {
      this.variaveisView.map(e => e.select = false);
      this.variaveisCSV = '';
    } else {
      this.variaveisView.map(e => e.select = true);
    }
    this.gerarCSV();
  }
  selectVariavel(item) {
    item.select = !item.select;
    this.gerarCSV();
  }

  gerarCSV() {
    this.lengthSelect = 0;
    let vazio = false;
    this.variaveisCSV = 'Variável,Tipo,Relevância,Status';

    this.variaveisView.forEach(e => {
      if (e.select) {
        this.lengthSelect++;
        vazio = true;
        this.variaveisCSV += `\n${e.nome},${e.pessoa},${e.status},${e.tipo}`;
      }
    });
    if (vazio === false) {
      this.variaveisCSV = '';
    }
    console.log(this.variaveisCSV);
  }

  /*
    download(fileName: string, index?: number) {
      const docSelect = (index || index === 0) ? this.singleDownload[index].csv : this.allDownload.csv.join('\n \n');
      // const docSelect = this.singleDownload[0].csv;
      const blob = new Blob([docSelect], { type: 'text/csv' });
      const a = document.createElement('a');
      a.download = `${fileName}.csv`;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/csv', a.download, a.href].join(':');

      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => window.URL.revokeObjectURL(a.href), 1500);
    }
  */

}
