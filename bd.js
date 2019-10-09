class BancoDeDados {
    constructor() {
        this.alunos = [];
        this.professores = [];
    }

    getA() {
        return this.alunos;
    };

    getAlunoPorId(id) {
        return this.alunos.filter((aluno) => aluno.id == id);
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

    getProfessorPorId(id) {
        return this.professores.filter((professor) => professor.id == id);
    };
};

module.exports = new BancoDeDados();