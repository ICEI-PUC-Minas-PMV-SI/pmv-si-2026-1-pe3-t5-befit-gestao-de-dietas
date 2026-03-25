# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

## 3.1 Objetivos deste documento
Descrever e especificar as necessidades dos usuários do aplicativo BEFIT, que devem ser atendidas pelo sistema, com foco na melhoria da qualidade de vida por meio da organização alimentar, acompanhamento de saúde e suporte à adesão a dietas personalizadas.

## 3.2 Escopo do produto

O BEFIT é um aplicativo desenvolvido para auxiliar pessoas na organização da sua rotina alimentar e no acompanhamento de indicadores básicos de saúde, com o objetivo de contribuir para a melhoria da qualidade de vida. O sistema permite ao usuário cadastrar uma dieta específica, preferencialmente com base na orientação de um profissional de saúde, e, a partir dessas informações, receber sugestões de refeições compatíveis com o padrão alimentar definido. Além disso, o aplicativo possibilita aplicar filtros relacionados a restrições alimentares e alergênicos, acompanhar dados como peso e IMC, planejar refeições semanais e gerar listas de compras de forma prática e organizada. Assim, o BEFIT atua como uma ferramenta de apoio ao planejamento alimentar, promovendo mais controle, praticidade e incentivo à adoção de hábitos saudáveis.

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado BEFIT – Aplicativo de Gestão Alimentar e Qualidade de Vida.
O sistema será composto por um módulo principal, contendo os seguintes elementos:
Cadastro de dietas personalizadas
Sugestão de refeições com base em filtros alimentares
Controle de alergênicos e restrições alimentares
Acompanhamento de indicadores de saúde (peso e IMC)
Planejamento semanal de refeições
Geração automática de lista de compras

### 3.2.2 Missão do produto
Promover a melhoria da qualidade de vida dos usuários por meio da organização da rotina alimentar, facilitando o acompanhamento de dietas prescritas por profissionais de saúde, incentivando hábitos saudáveis e oferecendo ferramentas práticas para planejamento alimentar. 

### 3.2.3 Limites do produto
O BEFIT não substitui o acompanhamento de profissionais de saúde, sendo apenas uma ferramenta de apoio. O sistema não realiza: prescrição automática de dietas sem orientação profissional, diagnósticos médicos ou nutricionais, integração direta com sistemas hospitalares ou clínicos (nesta versão), controle de medicamentos ou tratamentos clínicos. 

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Organização da rotina diária alimentar |	Essencial |
|2 | Acompanhamento dos resultados | Essencial | 
|3 | Geração automática de lista de compras| Essencial | 
|4	| Melhoria de qualidade de vida	| Recomendável | 

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

**Sumário:** Permite que o usuário se autentique no sistema para acessar funcionalidades e dados pessoais.
**Ator Primário:** Usuário.
**Ator Secundário:** Banco de Dados.
**Pré-condições:** O usuário deve possuir cadastro prévio e estar com acesso disponível ao sistema.

**Fluxo Principal:**

1. O usuário acessa a tela de login do sistema.
2. O sistema apresenta os campos de e-mail e senha.
3. O usuário informa suas credenciais de acesso.
4. O sistema valida o preenchimento dos campos obrigatórios.
5. O sistema consulta o banco de dados para localizar o usuário informado.
6. O sistema verifica se a senha informada corresponde à senha cadastrada.
7. O sistema autentica o usuário.
8. O sistema inicia a sessão e redireciona o usuário para a tela principal.

**Fluxo Alternativo A – Campos não preenchidos:**
a) O sistema identifica ausência de preenchimento em um ou mais campos obrigatórios.
b) O sistema exibe mensagem de erro solicitando o preenchimento correto.
c) O fluxo retorna ao passo 2.

**Fluxo Alternativo B – Credenciais inválidas:**
a) O sistema identifica que o e-mail não está cadastrado ou que a senha está incorreta.
b) O sistema informa que as credenciais são inválidas.
c) O sistema permite nova tentativa de autenticação.
d) O fluxo retorna ao passo 2.

**Fluxo Alternativo C – Falha de comunicação com o banco de dados:**
a) O sistema identifica indisponibilidade no acesso aos dados de autenticação.
b) O sistema informa indisponibilidade temporária.
c) O caso de uso é encerrado sem autenticação.

**Pós-condições:** O usuário é autenticado e passa a acessar as funcionalidades restritas do sistema.

---

#### **Fazer Cadastro (CSU02)**

**Sumário:** Permite que um novo usuário crie uma conta para utilizar os recursos do sistema.
**Ator Primário:** Usuário.
**Ator Secundário:** Banco de Dados.
**Pré-condições:** O usuário não pode possuir cadastro prévio com o e-mail informado.

**Fluxo Principal:**

1. O usuário acessa a opção de cadastro.
2. O sistema apresenta o formulário de cadastro com os campos nome, e-mail, idade e senha.
3. O usuário preenche os dados solicitados.
4. O sistema valida o preenchimento e o formato dos dados informados.
5. O sistema verifica se o e-mail informado já está cadastrado.
6. O sistema verifica se o usuário possui idade mínima de 18 anos.
7. O sistema registra os dados do novo usuário no banco de dados.
8. O sistema confirma a criação da conta.
9. O sistema redireciona o usuário para a tela de login.

**Fluxo Alternativo A – Campos inválidos ou incompletos:**
a) O sistema identifica campos obrigatórios não preenchidos ou em formato inválido.
b) O sistema exibe mensagem solicitando a correção dos dados.
c) O fluxo retorna ao passo 2.

**Fluxo Alternativo B – E-mail já cadastrado:**
a) O sistema identifica que o e-mail informado já pertence a uma conta existente.
b) O sistema informa que já existe cadastro vinculado ao e-mail.
c) O sistema orienta o usuário a realizar login ou informar outro e-mail.
d) O fluxo retorna ao passo 2.

**Fluxo Alternativo C – Idade insuficiente:**
a) O sistema identifica que o usuário possui menos de 18 anos.
b) O sistema informa a impossibilidade de conclusão do cadastro.
c) O caso de uso é encerrado sem criação de conta.

**Fluxo Alternativo D – Falha ao salvar cadastro:**
a) O sistema identifica erro no armazenamento das informações.
b) O sistema informa falha ao concluir o cadastro.
c) O caso de uso é encerrado sem criação de conta.

**Pós-condições:** Um novo perfil de usuário é criado e fica disponível para autenticação.

---

#### **Gerenciar Inventário de Alimentos (CSU03)**

**Sumário:** Permite ao usuário cadastrar, editar, remover e consultar alimentos do estoque doméstico.
**Ator Primário:** Usuário.
**Ator Secundário:** Banco de Dados.
**Pré-condições:** O usuário deve estar autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa o módulo de inventário de alimentos.
2. O sistema apresenta os alimentos atualmente cadastrados no estoque.
3. O usuário seleciona a operação desejada: adicionar, editar, remover ou consultar item.
4. O sistema apresenta os campos necessários para a operação escolhida.
5. O usuário informa ou altera os dados do alimento, como nome, quantidade, unidade de medida e validade, quando aplicável.
6. O sistema valida os dados informados.
7. O sistema registra a operação no banco de dados.
8. O sistema atualiza a lista de itens do inventário.

**Fluxo Alternativo A – Inclusão de alimento já existente:**
a) O sistema identifica que o alimento já está cadastrado no inventário.
b) O sistema oferece a opção de atualizar a quantidade existente.
c) O usuário confirma a atualização.
d) O sistema atualiza o item no estoque.

**Fluxo Alternativo B – Remoção de alimento:**
a) O usuário seleciona um alimento cadastrado.
b) O usuário escolhe a opção de exclusão.
c) O sistema solicita confirmação da operação.
d) O usuário confirma a exclusão.
e) O sistema remove o alimento do inventário.

**Fluxo Alternativo C – Dados inválidos:**
a) O sistema identifica inconsistência nos dados informados.
b) O sistema exibe mensagem de erro.
c) O fluxo retorna ao passo 4.

**Pós-condições:** O inventário do usuário permanece atualizado.

---

#### **Calcular IMC (CSU04)**

**Sumário:** Permite ao usuário calcular seu Índice de Massa Corporal a partir dos dados de peso e altura.
**Ator Primário:** Usuário.
**Pré-condições:** O usuário deve estar autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a funcionalidade de cálculo de IMC.
2. O sistema apresenta os campos para preenchimento de peso e altura.
3. O usuário informa os valores solicitados.
4. O sistema valida os dados informados.
5. O sistema realiza o cálculo do IMC.
6. O sistema apresenta o valor calculado e sua classificação correspondente.

**Fluxo Alternativo A – Dados não preenchidos:**
a) O sistema identifica ausência de peso ou altura.
b) O sistema solicita o preenchimento dos campos obrigatórios.
c) O fluxo retorna ao passo 2.

**Fluxo Alternativo B – Dados inválidos:**
a) O sistema identifica valores incompatíveis, negativos ou nulos.
b) O sistema informa erro nos dados inseridos.
c) O fluxo retorna ao passo 2.

**Pós-condições:** O IMC do usuário é calculado e exibido em tela.

---

#### **Gerenciar Preferências e Restrições Alimentares (CSU05)**

**Sumário:** Permite ao usuário registrar, alterar e remover preferências e restrições alimentares para personalizar recomendações e planejamentos.
**Ator Primário:** Usuário.
**Ator Secundário:** Banco de Dados.
**Pré-condições:** O usuário deve estar autenticado no sistema.

**Fluxo Principal:**

1. O usuário acessa a área de preferências alimentares.
2. O sistema apresenta as opções cadastradas e as categorias disponíveis.
3. O usuário seleciona a operação desejada: adicionar, editar ou remover preferência ou restrição.
4. O usuário informa os dados desejados, como vegetariano, low carb, sem glúten ou sem lactose.
5. O sistema valida a seleção realizada.
6. O sistema atualiza o perfil alimentar do usuário no banco de dados.
7. O sistema confirma a atualização realizada.

**Fluxo Alternativo A – Dados não selecionados:**
a) O sistema identifica ausência de seleção válida.
b) O sistema informa a necessidade de escolher ao menos uma opção válida.
c) O fluxo retorna ao passo 2.

**Fluxo Alternativo B – Operação cancelada:**
a) O usuário cancela a operação antes da confirmação.
b) O sistema encerra o caso de uso sem alterações.

**Pós-condições:** O perfil alimentar do usuário é atualizado.

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
