# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

## 3.1 Objetivos deste documento

Este documento especifica os requisitos funcionais e não funcionais do sistema **BEFIT**, detalhando as funcionalidades e restrições da aplicação. A especificação visa atender às necessidades de organização da rotina alimentar, planejamento de dietas e controle de indicadores de saúde (como peso e IMC), garantindo ao usuário as ferramentas necessárias para o acompanhamento de sua evolução física e nutricional de forma autônoma.

## 3.2 Escopo do produto

O BEFIT é um aplicativo desenvolvido para auxiliar pessoas na organização da sua rotina alimentar e no acompanhamento de indicadores básicos de saúde, com o objetivo de contribuir para a melhoria da qualidade de vida. O sistema permite ao Cliente cadastrar uma dieta específica, preferencialmente com base na orientação de um profissional de saúde, e, a partir dessas informações, receber sugestões de refeições compatíveis com o padrão alimentar definido. Além disso, o aplicativo possibilita aplicar filtros relacionados a restrições alimentares e alergênicos, acompanhar dados como peso e IMC, planejar refeições semanais e gerar listas de compras de forma prática e organizada. Assim, o BEFIT atua como uma ferramenta de apoio ao planejamento alimentar, promovendo mais controle, praticidade e incentivo à adoção de hábitos saudáveis.

### 3.2.1 Nome do produto e seus componentes principais

O produto será denominado **BEFIT – Aplicativo de Gestão Alimentar e Qualidade de Vida**.

O sistema será composto por um módulo principal, contendo os seguintes elementos:

- Cadastro de dietas personalizadas;
- Sugestão de refeições com base em filtros alimentares;
- Controle de alergênicos e restrições alimentares;
- Acompanhamento de indicadores de saúde (peso e IMC);
- Planejamento semanal de refeições;
- Geração automática de lista de compras.

### 3.2.2 Missão do produto
Promover a melhoria da qualidade de vida dos Clientes por meio da organização da rotina alimentar, facilitando o acompanhamento de dietas prescritas por profissionais de saúde, incentivando hábitos saudáveis e oferecendo ferramentas práticas para planejamento alimentar. 

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
| RF-001 | Gerenciar Preferências Alimentares | O sistema deve permitir que o Cliente cadastre suas preferências alimentares (ex: vegetariano, low carb, sem glúten, etc.). | MÉDIA |
| RF-002 | Visualizar Refeições por Complexidade | O sistema deve permitir que o Cliente visualize opções de refeições organizadas por complexidade, considerando o tempo de preparo. | ALTA |
| RF-003 | Gerar Lista de Compras | O sistema deve sugerir automaticamente uma lista de compras com base no plano de refeições escolhido pelo Cliente. | MÉDIA |
| RF-004 | Exibir Informações Nutricionais | O sistema deve fornecer informações nutricionais claras das refeições (calorias, proteínas, carboidratos, etc.). | ALTA |
| RF-005 | Monitorar Peso (IMC) | O sistema deve disponibilizar uma ferramenta para monitoramento do peso por meio do cálculo do IMC (Índice de Massa Corporal). | MÉDIA |
| RF-006 | Organizar Agenda de Refeições | O sistema deve permitir que o Cliente organize uma agenda semanal de refeições (café da manhã, almoço e jantar). | ALTA |
| RF-007 | Gerenciar Inventário de Alimentos | O sistema deve fornecer um sistema de inventário de alimentos integrado às refeições diárias do Cliente. | MÉDIA |
| RF-008 | Gerar Relatórios de Consumo | O sistema deve disponibilizar relatórios dos alimentos consumidos nos períodos diário, semanal e mensal. | BAIXA |
| RF-009 | Cadastro de Cliente | O sistema deve permitir que o Cliente realize cadastro na plataforma informando seus dados pessoais. | ALTA |
| RF-010 | Login de Cliente | O sistema deve permitir que o Cliente realize login na plataforma utilizando suas credenciais. | ALTA |

### 3.3.2 Requisitos Não Funcionais

| ID      | Descrição do Requisito                                                                            | Prioridade |
| ------- | ------------------------------------------------------------------------------------------------- | ---------- |
| RNF-001 | O sistema deve ser multiplataforma, funcionando em dispositivos móveis e computadores.            | MÉDIA      |
| RNF-002 | O sistema deve possuir interface simples e intuitiva.                                             | ALTA       |
| RNF-003 | O sistema deve ser desenvolvido utilizando JavaScript, HTML e CSS.                                | ALTA       |
| RNF-004 | O sistema deve funcionar de forma online, sem necessidade de instalação.                          | ALTA       |
| RNF-005 | O sistema deve suportar no mínimo 100 Clientes simultâneos sem perda significativa de desempenho. | MÉDIA      |
| RNF-006 | O sistema deve responder às ações do Cliente em até 2 segundos.                                   | ALTA       |


### 3.3.3 Clientes 
| Ator | Descrição |
|--------------------|------------------------------------|
| Cliente | Usuário final do sistema responsável por planejar sua alimentação, definir objetivos nutricionais (emagrecimento, ganho de massa, etc.), visualizar refeições, registrar consumo alimentar e acompanhar sua evolução. |
| Gestor de Dados | Responsável pela gestão e manutenção dos dados da plataforma, incluindo cadastro, atualização e organização de alimentos, refeições e informações nutricionais. |
| Analista | Responsável por gerar relatórios analíticos e acompanhar métricas de uso da plataforma, como número de usuários, engajamento e padrões de consumo. |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso

Como observado no diagrama de casos de uso da Figura 1, o Cliente interage com as principais funcionalidades do sistema BEFIT, podendo realizar cadastro e login, visualizar refeições, monitorar peso por meio do IMC, gerenciar preferências alimentares, organizar a agenda de refeições, visualizar informações nutricionais, gerenciar o inventário de alimentos, gerar lista de compras e emitir relatórios de consumo. O Sistema atua no processamento das validações e consultas internas, enquanto o Administrador participa das rotinas de apoio e manutenção relacionadas às funcionalidades da aplicação.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

<img width="754" height="580" alt="Diagrama de casos de uso_v3 drawio" src="https://github.com/user-attachments/assets/7cf1379c-d99c-4486-94d1-8477bcd747dd" />

 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso do Sistema de Gestão de Dietas está detalhado nesta seção, seguindo o padrão de fluxos principais e alternativos conforme as normas do projeto.

---

#### **Fazer Login (CSU01)**

**Sumário:** Permite que o Cliente se autentique no sistema para acessar funcionalidades e dados pessoais.
**Ator Primário:** Cliente.
**Ator Secundário:** Banco de Dados.
**Pré-condições:** O Cliente deve possuir cadastro prévio e estar com acesso disponível ao sistema.

**Fluxo Principal:**

1. O Cliente acessa a tela de login do sistema.
2. O sistema apresenta os campos de e-mail e senha.
3. O Cliente informa suas credenciais de acesso.
4. O sistema valida o preenchimento dos campos obrigatórios.
5. O sistema consulta o banco de dados para localizar o Cliente informado.
6. O sistema verifica se a senha informada corresponde à senha cadastrada.
7. O sistema autentica o Cliente.
8. O sistema inicia a sessão e redireciona o Cliente para a tela principal.

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

**Pós-condições:** O Cliente é autenticado e passa a acessar as funcionalidades restritas do sistema.

---

#### **Fazer Cadastro (CSU02)**

**Sumário:** Permite que um novo Cliente crie uma conta para utilizar os recursos do sistema.
**Ator Primário:** Cliente.
**Ator Secundário:** Banco de Dados.
**Pré-condições:** O Cliente não pode possuir cadastro prévio com o e-mail informado.

**Fluxo Principal:**

1. O Cliente acessa a opção de cadastro.
2. O sistema apresenta o formulário de cadastro com os campos nome, e-mail, idade e senha.
3. O Cliente preenche os dados solicitados.
4. O sistema valida o preenchimento e o formato dos dados informados.
5. O sistema verifica se o e-mail informado já está cadastrado.
6. O sistema verifica se o Cliente possui idade mínima de 18 anos.
7. O sistema registra os dados do novo Cliente no banco de dados.
8. O sistema confirma a criação da conta.
9. O sistema redireciona o Cliente para a tela de login.

**Fluxo Alternativo A – Campos inválidos ou incompletos:**
a) O sistema identifica campos obrigatórios não preenchidos ou em formato inválido.
b) O sistema exibe mensagem solicitando a correção dos dados.
c) O fluxo retorna ao passo 2.

**Fluxo Alternativo B – E-mail já cadastrado:**
a) O sistema identifica que o e-mail informado já pertence a uma conta existente.
b) O sistema informa que já existe cadastro vinculado ao e-mail.
c) O sistema orienta o Cliente a realizar login ou informar outro e-mail.
d) O fluxo retorna ao passo 2.

**Fluxo Alternativo C – Idade insuficiente:**
a) O sistema identifica que o Cliente possui menos de 18 anos.
b) O sistema informa a impossibilidade de conclusão do cadastro.
c) O caso de uso é encerrado sem criação de conta.

**Fluxo Alternativo D – Falha ao salvar cadastro:**
a) O sistema identifica erro no armazenamento das informações.
b) O sistema informa falha ao concluir o cadastro.
c) O caso de uso é encerrado sem criação de conta.

**Pós-condições:** Um novo perfil de Cliente é criado e fica disponível para autenticação.

---

#### **Gerenciar Inventário de Alimentos (CSU03)**

**Sumário:** Permite ao Cliente cadastrar, editar, remover e consultar alimentos do estoque doméstico.
**Ator Primário:** Cliente.
**Ator Secundário:** Banco de Dados.
**Pré-condições:** O Cliente deve estar autenticado no sistema.

**Fluxo Principal:**

1. O Cliente acessa o módulo de inventário de alimentos.
2. O sistema apresenta os alimentos atualmente cadastrados no estoque.
3. O Cliente seleciona a operação desejada: adicionar, editar, remover ou consultar item.
4. O sistema apresenta os campos necessários para a operação escolhida.
5. O Cliente informa ou altera os dados do alimento, como nome, quantidade, unidade de medida e validade, quando aplicável.
6. O sistema valida os dados informados.
7. O sistema registra a operação no banco de dados.
8. O sistema atualiza a lista de itens do inventário.

**Fluxo Alternativo A – Inclusão de alimento já existente:**
a) O sistema identifica que o alimento já está cadastrado no inventário.
b) O sistema oferece a opção de atualizar a quantidade existente.
c) O Cliente confirma a atualização.
d) O sistema atualiza o item no estoque.

**Fluxo Alternativo B – Remoção de alimento:**
a) O Cliente seleciona um alimento cadastrado.
b) O Cliente escolhe a opção de exclusão.
c) O sistema solicita confirmação da operação.
d) O Cliente confirma a exclusão.
e) O sistema remove o alimento do inventário.

**Fluxo Alternativo C – Dados inválidos:**
a) O sistema identifica inconsistência nos dados informados.
b) O sistema exibe mensagem de erro.
c) O fluxo retorna ao passo 4.

**Pós-condições:** O inventário do Cliente permanece atualizado.

---

#### **Calcular IMC (CSU04)**

**Sumário:** Permite ao Cliente calcular seu Índice de Massa Corporal a partir dos dados de peso e altura.
**Ator Primário:** Cliente.
**Pré-condições:** O Cliente deve estar autenticado no sistema.

**Fluxo Principal:**

1. O Cliente acessa a funcionalidade de cálculo de IMC.
2. O sistema apresenta os campos para preenchimento de peso e altura.
3. O Cliente informa os valores solicitados.
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

**Pós-condições:** O IMC do Cliente é calculado e exibido em tela.

---

#### **Gerenciar Preferências e Restrições Alimentares (CSU05)**

**Sumário:** Permite ao Cliente registrar, alterar e remover preferências e restrições alimentares para personalizar recomendações e planejamentos.
**Ator Primário:** Cliente.
**Ator Secundário:** Banco de Dados.
**Pré-condições:** O Cliente deve estar autenticado no sistema.

**Fluxo Principal:**

1. O Cliente acessa a área de preferências alimentares.
2. O sistema apresenta as opções cadastradas e as categorias disponíveis.
3. O Cliente seleciona a operação desejada: adicionar, editar ou remover preferência ou restrição.
4. O Cliente informa os dados desejados, como vegetariano, low carb, sem glúten ou sem lactose.
5. O sistema valida a seleção realizada.
6. O sistema atualiza o perfil alimentar do Cliente no banco de dados.
7. O sistema confirma a atualização realizada.

**Fluxo Alternativo A – Dados não selecionados:**
a) O sistema identifica ausência de seleção válida.
b) O sistema informa a necessidade de escolher ao menos uma opção válida.
c) O fluxo retorna ao passo 2.

**Fluxo Alternativo B – Operação cancelada:**
a) O Cliente cancela a operação antes da confirmação.
b) O sistema encerra o caso de uso sem alterações.

**Pós-condições:** O perfil alimentar do Cliente é atualizado.

---

#### **Planejar Refeições (CSU06)**

**Sumário:** Permite ao Cliente montar refeições com base em seu perfil alimentar, nas receitas disponíveis e nos ingredientes existentes no estoque.
**Ator Primário:** Cliente.
**Pré-condições:** O Cliente deve estar autenticado e possuir preferências alimentares cadastradas, quando aplicável.

**Fluxo Principal:**

1. O Cliente acessa a funcionalidade de planejamento de refeições.
2. O sistema apresenta as categorias de refeição, como café da manhã, almoço e jantar.
3. O Cliente seleciona o tipo de refeição que deseja planejar.
4. O sistema consulta o perfil alimentar do Cliente e o estoque disponível.
5. O sistema apresenta receitas compatíveis com o perfil e com os ingredientes disponíveis.
6. O Cliente seleciona a refeição desejada.
7. O sistema registra a refeição planejada no cronograma do Cliente.

**Fluxo Alternativo A – Estoque insuficiente:**
a) O sistema identifica ausência de ingredientes necessários para determinadas receitas.
b) O sistema sinaliza indisponibilidade e apresenta opções alternativas.
c) O Cliente escolhe outra receita ou encerra a operação.

**Fluxo Alternativo B – Nenhuma receita compatível encontrada:**
a) O sistema não localiza receitas compatíveis com o perfil alimentar e o estoque atual.
b) O sistema informa a indisponibilidade de opções no momento.
c) O caso de uso é encerrado sem registro de refeição.

**Pós-condições:** Uma refeição é planejada e vinculada ao cronograma do Cliente.

---

#### **Gerenciar Lista de Compras (CSU07)**

**Sumário:** Permite ao Cliente criar, atualizar e acompanhar sua lista de compras a partir do planejamento alimentar e do inventário disponível.
**Ator Primário:** Cliente.
**Pré-condições:** O Cliente deve estar autenticado no sistema.

**Fluxo Principal:**

1. O Cliente acessa a funcionalidade de lista de compras.
2. O sistema apresenta os itens atualmente cadastrados e as opções de manutenção.
3. O Cliente escolhe adicionar, remover, editar ou marcar itens como comprados.
4. O Cliente informa ou confirma os dados necessários.
5. O sistema valida a operação.
6. O sistema atualiza a lista de compras no banco de dados.
7. O sistema apresenta a lista atualizada ao Cliente.

**Fluxo Alternativo A – Geração automática a partir do planejamento:**
a) O Cliente solicita a geração automática da lista com base nas refeições planejadas.
b) O sistema compara os ingredientes necessários com o inventário atual.
c) O sistema adiciona à lista os itens faltantes.

**Fluxo Alternativo B – Dados inválidos:**
a) O sistema identifica inconsistência nos dados informados.
b) O sistema informa erro ao Cliente.
c) O fluxo retorna ao passo 3.

**Pós-condições:** A lista de compras permanece atualizada conforme a necessidade do Cliente.

---

#### **Organizar Agenda de Refeições (CSU08)**

**Sumário:** Permite ao Cliente definir e ajustar os horários das refeições planejadas ao longo da semana.
**Ator Primário:** Cliente.
**Pré-condições:** O Cliente deve estar autenticado e possuir ao menos uma refeição planejada.

**Fluxo Principal:**

1. O Cliente acessa a agenda de refeições.
2. O sistema apresenta as refeições planejadas e seus respectivos dias.
3. O Cliente seleciona uma refeição para definir ou alterar horário.
4. O Cliente informa o horário desejado.
5. O sistema valida o horário informado.
6. O sistema registra a agenda atualizada no cronograma pessoal do Cliente.

**Fluxo Alternativo A – Horário inválido:**
a) O sistema identifica formato inválido ou conflito de horário.
b) O sistema informa a inconsistência ao Cliente.
c) O fluxo retorna ao passo 3.

**Fluxo Alternativo B – Ausência de refeições planejadas:**
a) O sistema identifica que não existem refeições cadastradas na agenda.
b) O sistema informa que é necessário planejar refeições antes de organizar horários.
c) O caso de uso é encerrado.

**Pós-condições:** Os horários das refeições ficam registrados ou atualizados.

---

#### **Consultar Receitas (CSU09)**

**Sumário:** Permite ao Cliente pesquisar receitas cadastradas, visualizar modo de preparo, nível de complexidade e informações nutricionais.
**Ator Primário:** Cliente.
**Pré-condições:** O Cliente deve estar autenticado no sistema.

**Fluxo Principal:**

1. O Cliente acessa a funcionalidade de consulta de receitas.
2. O sistema apresenta filtros de busca por nome, tipo, ingrediente ou complexidade.
3. O Cliente informa os critérios desejados.
4. O sistema consulta o banco de dados.
5. O sistema apresenta as receitas encontradas.
6. O Cliente seleciona uma receita para visualização detalhada.
7. O sistema exibe ingredientes, modo de preparo, complexidade e informações nutricionais da receita.

**Fluxo Alternativo A – Nenhuma receita encontrada:**
a) O sistema não localiza receitas com os critérios informados.
b) O sistema informa ausência de resultados.
c) O fluxo retorna ao passo 2.

**Fluxo Alternativo B – Filtros inválidos ou incompletos:**
a) O sistema identifica preenchimento inadequado dos filtros.
b) O sistema solicita correção dos critérios de busca.
c) O fluxo retorna ao passo 2.

**Pós-condições:** As informações detalhadas da receita selecionada são apresentadas ao Cliente.

---

#### **Consultar Estoque (CSU10)**

**Sumário:** Permite ao Cliente visualizar os alimentos disponíveis em seu inventário, incluindo quantidades e situação de disponibilidade.
**Ator Primário:** Cliente.
**Pré-condições:** O Cliente deve estar autenticado no sistema.

**Fluxo Principal:**

1. O Cliente acessa a funcionalidade de consulta de estoque.
2. O sistema consulta os registros do inventário do Cliente.
3. O sistema organiza os alimentos cadastrados por nome, quantidade e unidade de medida.
4. O sistema exibe a lista de itens disponíveis ao Cliente.

**Fluxo Alternativo A – Estoque vazio:**
a) O sistema identifica que não existem alimentos cadastrados no inventário.
b) O sistema informa que o estoque está vazio.
c) O caso de uso é encerrado.

**Fluxo Alternativo B – Falha de consulta:**
a) O sistema identifica erro ao recuperar os dados do inventário.
b) O sistema informa indisponibilidade temporária.
c) O caso de uso é encerrado sem exibição dos dados.

**Pós-condições:** A situação atual do estoque é apresentada ao Cliente.

---

#### **Gerar Relatórios de Consumo (CSU11)**

**Sumário:** Permite ao Cliente gerar relatórios de consumo alimentar nos períodos diário, semanal e mensal, com base nos registros armazenados pelo sistema.
**Ator Primário:** Cliente.
**Pré-condições:** O Cliente deve estar autenticado no sistema e possuir registros de consumo cadastrados.

**Fluxo Principal:**

1. O Cliente acessa a funcionalidade de relatórios de consumo.
2. O sistema apresenta as opções de período de consulta: diário, semanal e mensal.
3. O Cliente seleciona o período desejado.
4. O sistema consulta os registros de consumo do Cliente no banco de dados.
5. O sistema processa os dados recuperados.
6. O sistema apresenta o relatório com os alimentos consumidos, quantidades registradas e resumo nutricional do período selecionado.

**Fluxo Alternativo A – Ausência de registros no período selecionado:**
a) O sistema identifica que não existem registros de consumo para o período informado.
b) O sistema informa que não há dados disponíveis para geração do relatório.
c) O caso de uso é encerrado sem emissão de relatório.

**Fluxo Alternativo B – Falha na consulta dos dados:**
a) O sistema identifica erro ao recuperar os registros de consumo.
b) O sistema informa indisponibilidade temporária ao Cliente.
c) O caso de uso é encerrado sem apresentação do relatório.

**Pós-condições:** O relatório de consumo do período selecionado é exibido ao Cliente, quando houver dados disponíveis.

---

### 3.4.3 Diagrama de Classes 

A Figura 2 apresenta o diagrama de classes do sistema BEFIT. Nele, a classe Users centraliza os dados cadastrais e objetivos do Cliente, enquanto Foods e Meals representam os alimentos e refeições disponíveis no sistema. A relação entre refeições e ingredientes é modelada por Meal_Ingredients, e o planejamento alimentar é organizado por Meal_Plans e Meal_Plan_Items. O acompanhamento do consumo é registrado em Consumption_Logs, a lista de compras é controlada por Shopping_Lists, o estoque doméstico é mantido em User_Inventories e a evolução de peso e IMC é armazenada em Weight_Histories. A classe Migrations possui função técnica de controle da estrutura do banco de dados.

#### Figura 2: Diagrama de Classes do Sistema.
 
<img width="721" height="1665" alt="diagrama_classes" src="https://github.com/user-attachments/assets/4e499b92-d91e-4cc7-96ef-98fedccc53bb" />


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Users |	Armazena o perfil completo do Cliente, incluindo dados cadastrais, altura, idade, objetivos e preferências alimentares. |
| 2	| Foods |	Catálogo de alimentos com porções unitárias e detalhamento nutricional (calorias, proteínas, carboidratos e gorduras). |
| 3 |	Meals |	Define as refeições especificando complexidade, tempo de preparo e valores nutricionais. |
| 4 |	Meal_Ingredients |	Relaciona alimentos a refeições, definindo a quantidade exata de cada ingrediente por refeição. |
| 5	|	Meal_Plans |	Estabelece o cronograma alimentar do Cliente, definindo os períodos de início e fim da dieta planejada. |
| 6 |	Meal_Plan_Items |	Detalha a agenda do plano, vinculando o dia da semana e o tipo de refeição (café, almoço, jantar) às refeições cadastradas. |
| 7 |	Consumption_Logs |	Registra o histórico real de consumo do Cliente, facilitando o acompanhamento diário da dieta. |
| 8 |	Shopping_Lists |	Gera a lista de compras com base no estoque disponível e cronograma da semana. |
| 9 |	User_Inventories |	Controla o estoque de alimentos do Cliente, monitorando quantidades disponíveis e prazos de validade. |
| 10 |	Weight_Histories |	Armazena a evolução do Cliente, registrando variações de peso e cálculo automático de IMC. |
| 11 |	Migrations |	Gerencia o versionamento técnico da estrutura do banco de dados, garantindo a integridade das atualizações do sistema. |
