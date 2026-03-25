# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nesta parte do trabalho você deve detalhar a documentação dos requisitos do sistema proposto de acordo com as seções a seguir. Ressalta-se que aqui é utilizado como exemplo um sistema de gestão de cursos de aperfeiçoamento.

## 3.1 Objetivos deste documento
Descrever e especificar as necessidades da Coordenação do Curso de Sistemas de Informação da PUC Minas que devem ser atendidas pelo projeto SCCA – Sistema de Cadastro de Cursos de Aperfeiçoamento.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado SCCA – Sistema de Cadastro de Cursos de Aperfeiçoamento. Ele terá somente um componente (módulo) com os devidos elementos necessários à gestão de cursos.

### 3.2.2 Missão do produto
Gerenciar informações sobre a oferta de cursos de aperfeiçoamento, gerenciar a composição das turmas, alunos, professores e matrículas. 

### 3.2.3 Limites do produto
O SCCA não fornece nenhuma forma de avaliação de alunos, pagamento de parcelas do curso, pagamento a professore e agendamentos. O SCCA não contempla o atendimento a vários cursos de Sistemas de Informação de outras unidades da PUC Minas.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Organização da rotina diária alimentar |	Essencial |
|2 | Acompanhamento dos resultados | Essencial | 
|3 | Facilitação na produção de alimentos diferenciados| Essencial | 
|4	| Melhoria da saúde	| Recomendável | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição | Prioridade |
|--------|--------------------------------------|-----------|------------|
| RF-001 | Gerenciar Preferências Alimentares | O sistema deve permitir que o usuário cadastre suas preferências alimentares (ex: vegetariano, low carb, sem glúten, etc.). | MÉDIA |
| RF-002 | Visualizar Refeições por Complexidade | O sistema deve permitir que o usuário visualize opções de refeições organizadas por complexidade, considerando o tempo de preparo. | ALTA |
| RF-003 | Gerar Lista de Compras | O sistema deve sugerir automaticamente uma lista de compras com base no plano de refeições escolhido pelo usuário. | MÉDIA |
| RF-004 | Exibir Informações Nutricionais | O sistema deve fornecer informações nutricionais claras das refeições (calorias, proteínas, carboidratos, etc.). | ALTA |
| RF-005 | Monitorar Peso (IMC) | O sistema deve disponibilizar uma ferramenta para monitoramento do peso por meio do cálculo do IMC (Índice de Massa Corporal). | MÉDIA |
| RF-006 | Organizar Agenda de Refeições | O sistema deve permitir que o usuário organize uma agenda semanal de refeições (café da manhã, almoço e jantar). | ALTA |
| RF-007 | Gerenciar Inventário de Alimentos | O sistema deve fornecer um sistema de inventário de alimentos integrado às refeições diárias do usuário. | MÉDIA |
| RF-008 | Gerar Relatórios de Consumo | O sistema deve disponibilizar relatórios dos alimentos consumidos nos períodos diário, semanal e mensal. | BAIXA |
| RF-009 | Cadastro de Usuário | O sistema deve permitir que o usuário realize cadastro na plataforma informando seus dados pessoais. | ALTA |
| RF-010 | Login de Usuário | O sistema deve permitir que o usuário realize login na plataforma utilizando suas credenciais. | ALTA |

### 3.3.2 Requisitos Não Funcionais

| ID      | Descrição do Requisito                                                                            | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | O sistema deve ser multiplataforma, funcionando em dispositivos móveis e computadores.            | MÉDIA      |
| RNF-002 | O sistema deve possuir interface simples e intuitiva.                                             | ALTA       |
| RNF-003 | O sistema deve ser desenvolvido utilizando JavaScript, HTML e CSS.                                | ALTA       |
| RNF-004 | O sistema deve funcionar de forma online, sem necessidade de instalação.                          | ALTA       |
| RNF-005 | O sistema deve suportar no mínimo 100 usuários simultâneos sem perda significativa de desempenho. | MÉDIA      |
| RNF-006 | O sistema deve responder às ações do usuário em até 2 segundos.                                   | ALTA       |


### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Cliente | O Cliente do sistema responsável por planejar sua alimentação, definir objetivos nutricionais (emagrecimento, ganho de massa, etc.), visualizar refeições, registrar consumo alimentar e acompanhar sua evolução. |
| Administrador | Usuário responsável pela manutenção do sistema, incluindo o gerenciamento de dados de alimentos, refeições e suporte geral da aplicação. |
| Sistema | Responsável por processar dados, gerar recomendações de refeições, calcular informações nutricionais e fornecer relatórios ao usuário. |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

<img width="745" height="580" alt="Diagrama de casos de uso_v2 drawio" src="https://github.com/user-attachments/assets/cb9472e3-4a31-4dcd-8fab-3a0d13ab5f95" />

 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso do Sistema de Gestão de Dietas está detalhado nesta seção, seguindo o padrão de fluxos principais e alternativos conforme as normas do projeto.

---

#### **Fazer Login (CSU01)**
**Sumário:** O Usuário realiza a autenticação no sistema para acessar as funcionalidades.  
**Ator Primário:** Usuário.  
**Ator Secundário:** Banco de Dados.  
**Pré-condições:** O Usuário deve possuir cadastro prévio.  

**Fluxo Principal:**
1. O Usuário solicita acesso ao sistema.  
2. O Sistema apresenta os campos para inserção de e-mail e senha.  
3. O Usuário fornece as credenciais solicitadas.  
4. O Sistema executa a verificação da senha.  
5. O Sistema valida o acesso e redireciona para a tela principal.

**Fluxo Alternativo – Erro de Login:**  
a) O Sistema identifica que os dados são inválidos ou inexistentes.  
b) O Sistema reporta o erro e permite que o Usuário tente novamente.

**Pós-condições:** O Usuário está autenticado e com acesso liberado.

---

#### **Fazer Cadastro (CSU02)**
**Sumário:** O Usuário realiza o seu registro inicial para utilizar as funcionalidades do sistema.  
**Ator Primário:** Usuário.  
**Ator Secundário:** Banco de Dados.  
**Pré-condições:** O Usuário não deve possuir cadastro prévio com o e-mail informado.  

**Fluxo Principal:**
1. O Usuário solicita a criação de uma nova conta.  
2. O Sistema apresenta o formulário de cadastro (Nome, E-mail, Idade e Senha).  
3. O Usuário fornece os dados solicitados.  
4. O Sistema verifica a idade mínima de 18 anos.  
5. O Sistema valida os dados e armazena no Banco de Dados.

**Fluxo Alternativo – Idade insuficiente:**  
a) O Sistema identifica que o Usuário possui menos de 18 anos.  
b) O Sistema reporta a impossibilidade de cadastro e encerra o caso de uso.

**Pós-condições:** Um novo perfil de usuário foi criado no sistema.

---

#### **Gerenciar Estoque (CSU03)**
**Sumário:** O Usuário realiza a gestão (inclusão, remoção, alteração e consulta) dos ingredientes disponíveis.  
**Ator Primário:** Usuário.  
**Ator Secundário:** Banco de Dados.  
**Pré-condições:** O Usuário deve estar autenticado.  

**Fluxo Principal:**
1. O Usuário requisita manutenção do estoque.  
2. O Sistema apresenta as operações: inclusão de ingrediente, alteração, exclusão e consulta de saldo.  
3. O Usuário seleciona a operação desejada ou opta por finalizar.  
4. Se o Usuário desejar continuar, o caso de uso retorna ao passo 2; caso contrário, termina.

**Fluxo Alternativo – Inclusão:**  
a) O Usuário requisita a inclusão de um ingrediente.  
b) O Sistema solicita o nome e a quantidade do item.  
c) O Sistema verifica se o item já existe. Se não, inclui o novo registro; se sim, atualiza a quantidade.

**Fluxo Alternativo – Remoção/Alteração:**  
a) O Usuário seleciona o ingrediente e solicita a alteração de dados ou exclusão.  
b) O Sistema valida a operação e atualiza o banco de dados.

**Pós-condições:** O estoque foi atualizado ou consultado com sucesso.

---

#### **Calcular IMC (CSU04)**
**Sumário:** O Usuário fornece dados antropométricos para obter seu Índice de Massa Corporal.  
**Ator Primário:** Usuário.  
**Pré-condições:** O Usuário deve estar logado no sistema.  

**Fluxo Principal:**
1. O Usuário solicita o cálculo de IMC.  
2. O Sistema apresenta campos para preenchimento de peso e altura.  
3. O Usuário fornece os dados solicitados.  
4. O Sistema verifica a validade dos dados.  
5. O Sistema realiza o cálculo e apresenta o resultado e a classificação.

**Pós-condições:** O IMC foi calculado e apresentado em tela.

---

#### **Cadastrar Restrição Alimentar (CSU05)**
**Sumário:** O Usuário registra alergias ou preferências restritivas para filtrar o planejamento alimentar.  
**Ator Primário:** Usuário.  
**Ator Secundário:** Banco de Dados.  
**Pré-condições:** O Usuário deve estar autenticado.  

**Fluxo Principal:**
1. O Usuário solicita a manutenção de suas restrições alimentares.  
2. O Sistema apresenta as opções de inclusão, alteração ou remoção de restrições.  
3. O Usuário seleciona a operação e fornece os dados (ex: "Sem Glúten", "Sem Lactose").  
4. O Sistema valida a seleção e atualiza o perfil do Usuário no Banco de Dados.

**Pós-condições:** As restrições alimentares foram atualizadas.

---

#### **Planejar Refeições (CSU06)**
**Sumário:** O Usuário organiza seu cronograma alimentar (Café, Almoço ou Jantar) com base nas receitas e no estoque.  
**Ator Primário:** Usuário.  
**Ator Secundário:** Banco de Dados.  
**Pré-condições:** O Usuário deve estar autenticado.  

**Fluxo Principal:**
1. O Usuário solicita o planejamento de uma nova refeição.  
2. O Sistema apresenta as categorias (Café da Manhã, Almoço, Jantar).  
3. O Usuário seleciona o tipo de refeição.  
4. O Sistema verifica o estoque disponível e apresenta as receitas possíveis.  
5. O Usuário seleciona a receita desejada.  
6. O Sistema registra a refeição na agenda do Usuário.

**Pós-condições:** Uma nova refeição foi agendada no cronograma.

---

#### **Gerenciar Lista de Compras (CSU07)**
**Sumário:** O Usuário realiza a gestão dos itens que pretende adquirir.  
**Ator Primário:** Usuário.  
**Ator Secundário:** Banco de Dados.  
**Pré-condições:** O Usuário deve estar autenticado.  

**Fluxo Principal:**
1. O Usuário acessa a funcionalidade de lista de compras.  
2. O Sistema apresenta os itens cadastrados e opções de manutenção.  
3. O Usuário seleciona a operação desejada (adicionar, remover ou marcar como comprado).  
4. O Sistema atualiza a lista de compras.

**Pós-condições:** A lista de compras foi modificada ou consultada.

---

#### **Organizar Agenda de Refeições (CSU08)**
**Sumário:** O Usuário define e ajusta o cronograma de horários para as refeições planejadas.  
**Ator Primário:** Usuário.  
**Pré-condições:** O Usuário deve possuir refeições planejadas.  

**Fluxo Principal:**
1. O Usuário acessa a agenda de refeições.  
2. O Sistema apresenta a lista de refeições agendadas.  
3. O Usuário seleciona uma refeição e define o horário de consumo.  
4. O Sistema registra os horários no cronograma pessoal.

**Pós-condições:** Os horários das refeições foram estabelecidos.

---

#### **Consultar Receitas (CSU09)**
**Sumário:** O Usuário realiza a busca e visualização de receitas cadastradas no sistema.  
**Ator Primário:** Usuário.  
**Ator Secundário:** Banco de Dados.  
**Pré-condições:** O Usuário deve estar autenticado.  

**Fluxo Principal:**
1. O Usuário solicita a consulta de receitas.  
2. O Sistema apresenta opções de busca (por nome, tipo ou ingrediente).  
3. O Usuário insere o termo de busca desejado.  
4. O Sistema consulta o Banco de Dados e retorna as opções encontradas.  
5. O Usuário seleciona uma receita para visualizar o modo de preparo.

**Pós-condições:** Os detalhes da receita foram apresentados ao Usuário.

---

#### **Consultar Estoque (CSU10)**
**Sumário:** O Sistema verifica a disponibilidade de ingredientes cadastrados.  
**Ator Primário:** Usuário (ou outro módulo que necessite da informação).  
**Ator Secundário:** Banco de Dados.  

**Fluxo Principal:**
1. O Sistema acessa os registros de ingredientes.  
2. O Sistema filtra os itens com saldo disponível.  
3. O Sistema apresenta a lista de ingredientes ao Usuário.

**Pós-condições:** A lista de ingredientes disponíveis foi exibida ao Usuário.

---

#### **Consultar Estoque (CSU10)**
**Sumário:** O Sistema verifica a disponibilidade de ingredientes no Banco de Dados.  
**Ator Primário:** Usuário (ou disparado internamente por outros CSUs).  
**Ator Secundário:** Banco de Dados.  

**Fluxo Principal:**
1. O Sistema acessa os registros de ingredientes.  
2. O Sistema filtra os itens com saldo disponível.  
3. O Sistema apresenta a lista de ingredientes ao Usuário.

**Pós-condições:** A lista de ingredientes disponíveis foi exibida ou enviada ao CSU chamador.


#### Gerenciar Inventário de Alimentos (CSU02)

Sumário: Permite cadastrar, editar ou remover alimentos do estoque doméstico.

Ator Primário: Usuário.

Pré-condições: Usuário deve estarr autenticado no sistema.

Fluxo Principal:

1)  O usuário acessa o módulo de estoque.
2) 	O sistema apresenta os alimentos cadastrados.
3) 	O usuário seleciona a opção adicionar alimento.
4) 	O sistema valida os dados.
5) 	O usuário informa nome do alimento, quantidade e unidade.
6) 	O sistema registra o alimento no estoque.
    	
Fluxo Alternativo (1): Atualizar quantidade

a)	O usuário seleciona um alimento existente. <br>
b)	O usuário altera a quantidade disponível. <br>
c)	O sistema atualiza o estoque. <br>

Fluxo Alternativo (2): Dados inválidos

a)	O usuário seleciona um alimento cadastrado. <br>
b)	O usuário escolhe a opção excluir. <br>
c)	O sistema remove o alimento do estoque. <br>

Pós-condições: O estoque de alimentos fica atualizado.



### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
<img width="721" height="1665" alt="diagrama_classes" src="https://github.com/user-attachments/assets/4e499b92-d91e-4cc7-96ef-98fedccc53bb" />


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Users |	Armazena o perfil completo do usuário, incluindo dados cadastrais, altura, idade, objetivos e preferências alimentares. |
| 2	| Foods |	Catálogo de alimentos com porções unitárias e detalhamento nutricional (calorias, proteínas, carboidratos e gorduras). |
| 3 |	Meals |	Define as refeições especificando complexidade, tempo de preparo e valores nutricionais. |
| 4 |	Meal_Ingredients |	Relaciona alimentos a refeições, definindo a quantidade exata de cada ingrediente por refeição. |
| 5	|	Meal_Plans |	Estabelece o cronograma alimentar do usuário, definindo os períodos de início e fim da dieta planejada. |
| 6 |	Meal_Plan_Items |	Detalha a agenda do plano, vinculando o dia da semana e o tipo de refeição (café, almoço, jantar) às refeições cadastradas. |
| 7 |	Consumption_Logs |	Registra o histórico real de consumo do usuário, facilitando o acompanhamento diário da dieta. |
| 8 |	Shopping_Lists |	Gera a lista de compras com base no estoque disponível e cronograma da semana. |
| 9 |	User_Inventories |	Controla o estoque de alimentos do usuário, monitorando quantidades disponíveis e prazos de validade. |
| 10 |	Weight_Histories |	Armazena a evolução do usuário, registrando variações de peso e cálculo automático de IMC. |
| 11 |	Migrations |	Gerencia o versionamento técnico da estrutura do banco de dados, garantindo a integridade das atualizações do sistema. |
