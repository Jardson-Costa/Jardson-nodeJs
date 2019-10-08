class BancoDeDados {
    constructor() {
        this.alunos = [];
        this.professores = [];
    }

    getA() {
        return this.alunos;
    };


    addAl(aluno) {
        this.alunos.push(aluno);
    };

    getP() {
        return this.professores;
    };

    addPr(professor) {
        this.professores.push(professor);
    };
};

module.exports = new BancoDeDados();