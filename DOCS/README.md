# Wireframes do site e Requisitos Funcionais e Não Fucionais

* [Repositorio do Front-End](https://github.com/PedroDNRusso/TCC-DS-FRTEND)

## Requisitos Funcionais

- [RF001] Paciente pode fazer cadastro, atualizar suas informações e excluir seu cadastro
- [RF001.1] Paciente pode visualizar e excluir recados e visualizar atestados
- [RF002] Medico pode fazer cadastro, atualizar suas informações e excluir seu cadastro
- [RF002.1] Medico pode criar atestados (Func_Med) e enviar recados para os pacientes (Mens_Med)

## Requisitos Sprint 1
- [x] Escolher a metodologia **SCRUM, KANBAN, XP, outras**
- [x] Definir **Papéis e responsabilidades**
- [x] Apresentar a proposta inicial
* [Slide](https://github.com/PedroDNRusso/TCC-DS/blob/main/DOCS/Metodologia.pdf)

## Requisitos - Sprint 2
- Metodologia: KanBan
- Tema inicial: Diagnostico Digital (Saúde relação entre paciente e médico)
- Alunos: Melissa|Full Stack|, Lizzie|Mobile|, Pedro|Full Stack|, Rodrigo|Mobile|
- [Repositório github](https://github.com/PedroDNRusso/TCC-DS.git)
- [x] Modelar o negócio no **[Canvas](https://wellifabio.github.io/canvas/)**
- [x] Criar um cronograma **[Gráfico Gant](https://wellifabio.github.io/gantt/)**
- [x] Criar um repositório no **github** e adicionar os integrantes do grupo como colaboradores.
    - [x] Enviar o link do repositório neste **[FORMS](https://docs.google.com/forms/d/e/1FAIpQLSdQFCwZJLTHT7JLSeKzwsJa9NJqV4QQ1FKrmGqT6vaZVynukw/viewform?usp=dialog)**
- [x] **Protótipo** funcional inicial (Com Figma - Mobile e Web)    
    - [x] Web
    - [x] Mobile
- [x] Elencar os **[requisitos funcionais como neste exemplo](./requisitos.md)**. 
    - [x] Ilustrar cada **requisito funciional** com [DCU (Diagrama de casos de Uso)](https://github.com/wellifabio/senai2024/tree/main/ds/3des/03-rms/aula02)
- [x] Modelar o banco de dados MER x DER
- [x] Cadastrar os integrantes do grupo nas ferramentas de gestão de projeto escolhida Trello, Jira, Asana, etc.
* [Slide](https://github.com/PedroDNRusso/TCC-DS/blob/main/DOCS/Diagnostico.pdf)

## Requisitos - Sprint 3
- [x] Iniciar a codificação/desenvolvimento **Banco de dados**
- [x] Iniciar a codificação/desenvolvimento **Back-end**
- [x] UML [DC (Diagrama de Classes)](https://github.com/wellifabio/senai2024/tree/main/ds/3des/03-rms/aula03) **Back-End**
- [x] Iniciar a codificação/desenvolvimento **Front-end**
- [x] UML [DA (Diagrama de Atividades)](../../02-pbe2/aula10/README.md) **Front-End**
- [x] Iniciar a codificação/desenvolvimento **Mobile**
- [x] Análise de Viabilidade com Matriz SWOT
- [x] Triângulo da qualidade do Projeto (Escopo, Prazo e Custo)

## Proxima Sprint - Sprint 04
- [x] Back-End - CRUDs (Cadastro, Listagem, alteração e exclusão) das principais **tabelas**.
- [x] Back-Front - CRUDs das principais **Telas** com Responsividade.
- [x] Login com autenticação real (segurança JWT).
- [x] Integração do front com o back-end e banco de dados. 
- [x] Fluxo de navegação funcionando (Web e/ou Mobile).
- [x] Relatório de testes manuais **unitários**, **integração** e **ponto a ponto**.
- [x] Entregas através do repositório do projeto no GitHub, com evidências dos testes em relatório no formato PDF.

## Próxima Sprint (Sprint 05 - 06/10) Backlog
Nesta sprint, vamos focar na implantação do projeto, garantindo que tudo esteja funcionando corretamente em um ambiente de produção. Também faremos uma revisão final do código e documentação.
- [x] **Implantação** do Back-End em um serviço de nuvem (ex: Vercel, Heroku, AWS).
- [x] **Implantação** do Front-End em um serviço de nuvem (ex: Vercel, GitHub Pages).
- [-] Iniciar o desenvolvimento do App **Mobile** (Funcionalidades principais).
- [ ] Testes de integração e ponto a ponto (Caixa preta e Caixa branca).
    - [ ] Após o **back-end** implantado, Criar um Roteiro/check-list e testar manualmente (**Teste de integração: Back/BD**) a API a partir do **Insomnia** e documentar os testes. Tirando prints e fazendo um relatório. (**Caixa branca**).
    - [ ] Após o **front-end** implantado, Criar um Roteiro/check-list para testar o **Front-End** manualmente (**Teste ponto a ponto**), fazer um relatório dos testes. (**Caixa branca**).
    - [ ] Criar um Roteiro/check-list (**teste de integração**) pedir para um colega de outro grupo testar a **API implantada** a partir do **Insomnia** e documentar os testes. Tirando prints e fazendo um relatório. (**Caixa preta**).
    - [ ] Criar um Roteiro/check-list (Teste **ponto a ponto**) pedir para um colega de outro grupo testar manualmente o **Front-End implantado** e fazer um relatório dos testes. (**Caixa preta**).
- [x] Adicionar um recurso de **IoT** (opcional, pois dependendo do tema pode não fazer sentido).
- [ ] Revisão do cronograma do projeto.
- [ ] Revisão da documentação.
    - [x] Matriz SWOT.
    - [x] DER atualizado ou UML Diagrama de Classes.
    - [x] Requisitos Funcionais e Não Funcionais.
        - [ ] UML DCU (Diagrama de Caso de Uso).
- [x] Para implantação cada stack (front-end, back-end e mobile) foi necessário criar um repositório separado para cada um no **GitHub**, deixar link dos repositórios no **README.md do repositório principal** do projeto, com todas as documentações em **PDF**.

## Wireframes de Hub de Paciente
![Wireframe Home](./wireframes/WireframeHome.png)
![Wireframe Cadastro](./wireframes/WireframeCadastroPac.png)
![Wireframe Login](./wireframes/WireframeLoginPac.png)
![Wireframe UI](./wireframes/WireframeUIPac.png)
![Wireframe Configurações](./wireframes/WireframeConfPac.png)
![Wireframe Func_Med](./wireframes/WireframeFun_MedPac.png)
![Wireframe Mens_Med](./wireframes/WireframeMens_MedPac.png)

## Wireframes de Hub de Médico
![Wireframe Home](./wireframes/WireframeHome.png)
![Wireframe Cadastro de Médico](./wireframes/WireframeCadastroMed.png)
![Wireframe Login de Médico](./wireframes/WireframeLoginMed.png)
![Wireframe UI de Médico](./wireframes/WireframeUIMed.png)
![Wireframe Configurações de Médico](./wireframes/WireframeConfMed.png)
![Wireframe Func_Med de Médico](./wireframes/WireframeFun_Med.png)
![Wireframe Mens_Med de Médico](./wireframes/WireframeMens_Med.png)

