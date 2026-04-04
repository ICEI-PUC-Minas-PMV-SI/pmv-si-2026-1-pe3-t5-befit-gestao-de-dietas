# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

## 3.1 Objetivos deste documento

Este documento especifica os requisitos funcionais e não funcionais do sistema **BEFIT**, detalhando as funcionalidades e restrições da aplicação. A especificação visa atender às necessidades de organização da rotina alimentar, planejamento de dietas e controle de indicadores de saúde (como peso e IMC), garantindo ao Cliente as ferramentas necessárias para o acompanhamento de sua evolução física e nutricional de forma autônoma.

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
|--------------------|------------------------------------|---------------------------------------------------------------------------------------------------|------------|
| RF-001 | Cadastro de Cliente | O sistema deve permitir que o Cliente realize cadastro na plataforma informando seus dados pessoais. | ALTA |
| RF-002 | Login de Cliente | O sistema deve permitir que o Cliente realize login na plataforma utilizando suas credenciais. | ALTA |
| RF-003 | Gerenciar Preferências Alimentares | O sistema deve permitir que o Cliente cadastre suas preferências alimentares (ex: vegetariano, low carb, sem glúten, etc.). | MÉDIA |
| RF-004 | Visualizar Refeições por Complexidade | O sistema deve permitir que o Cliente visualize opções de refeições organizadas por complexidade, considerando o tempo de preparo. | ALTA |
| RF-005 | Monitorar Peso (IMC) | O sistema deve permitir o monitoramento do peso por meio do cálculo do IMC (Índice de Massa Corporal). | MÉDIA |
| RF-006 | Organizar Agenda de Refeições | O sistema deve permitir que o Cliente organize uma agenda semanal de refeições (café da manhã, almoço e jantar). | ALTA |
| RF-007 | Exibir Informações Nutricionais | O sistema deve fornecer informações nutricionais claras das refeições (calorias, proteínas, carboidratos, etc.). | ALTA |
| RF-008 | Gerenciar Inventário de Alimentos | O sistema deve fornecer um sistema de inventário de alimentos integrado às refeições diárias do Cliente. | MÉDIA |
| RF-009 | Gerar Lista de Compras | O sistema deve sugerir automaticamente uma lista de compras com base no plano de refeições escolhido pelo Cliente. | MÉDIA |
| RF-010 | Gerar Relatórios de Consumo | O sistema deve disponibilizar relatórios dos alimentos consumidos nos períodos diário, semanal e mensal. | BAIXA |

### 3.3.2 Requisitos Não Funcionais

| ID      | Requisito Não Funcional (Restrição)                                                                            | Prioridade |
|--------------------|---------------------------------------------------------------------------------------------------|------------|
| RNF-001 | O sistema deve ser multiplataforma, funcionando em dispositivos móveis e computadores.            | MÉDIA      |
| RNF-002 | O sistema deve possuir interface simples e intuitiva.                                             | ALTA       |
| RNF-003 | O sistema deve ser desenvolvido utilizando JavaScript, HTML e CSS.                                | ALTA       |
| RNF-004 | O sistema deve funcionar de forma online, sem necessidade de instalação.                          | ALTA       |
| RNF-005 | O sistema deve suportar no mínimo 100 Clientes simultâneos sem perda significativa de desempenho. | MÉDIA      |
| RNF-006 | O sistema deve responder às ações do Cliente em até 2 segundos.                                   | ALTA       |


### 3.3.3 Clientes 
| Ator | Descrição |
|--------------------|--------------------------------------|
| Cliente | Usuário final do sistema responsável por planejar sua alimentação, definir objetivos nutricionais (emagrecimento, ganho de massa, etc.), visualizar refeições, registrar consumo alimentar e acompanhar sua evolução. |
| Gestor de Dados | Responsável pela gestão e manutenção dos dados da plataforma, atualização e organização de alimentos, refeições e informações nutricionais. |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso

Como observado no diagrama de casos de uso da Figura 1, o Cliente interage com as principais funcionalidades do sistema BEFIT, podendo realizar cadastro e login, visualizar refeições, monitorar peso por meio do IMC, gerenciar preferências alimentares, organizar a agenda de refeições, visualizar informações nutricionais, gerenciar o inventário de alimentos, gerar lista de compras e emitir relatórios de consumo. O Sistema atua no processamento das validações e consultas internas, enquanto o Gestor de Dados participa das rotinas de apoio e manutenção relacionadas às funcionalidades da aplicação.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

<img width="754" height="580" alt="Diagrama de casos de uso_v3 drawio" src="https://github.com/user-attachments/assets/7cf1379c-d99c-4486-94d1-8477bcd747dd" />


### 3.4.2 Descrições de Casos de Uso

Nesta seção, são detalhadas as interações entre os atores e o sistema para cada funcionalidade identificada, incluindo fluxos principais, fluxos alternativos e condições de sucesso para a execução de cada caso de uso.


#### **Fazer Login (CSU01)**

**Sumário:** Permite que o Cliente ou o Gestor de Dados se autentiquem no sistema. O acesso é diferenciado pelo perfil (`role`): o Cliente utiliza sua conta criada no sistema, enquanto o Gestor de Dados utiliza credenciais administrativas pré-configuradas internamente para fins de segurança e gestão.<br>
**Ator Primário:** Cliente  
**Ator Secundário:** Gestor de Dados  
**Pré-condições:** O usuário deve possuir cadastro ativo (via CSU02 para Clientes ou via cadastro interno para o Gestor de Dados).<br>

**Fluxo Principal:**

1. O Cliente ou Gestor de Dados acessa a tela de login do sistema.
2. O sistema apresenta os campos de e-mail e senha.
3. O usuário informa suas credenciais de acesso.
4. O sistema valida o preenchimento dos campos obrigatórios.
5. O sistema valida as credenciais informadas e **Verifica senha** `<<include>>`.
6. O sistema identifica o perfil de acesso do usuário (Cliente ou Gestor de Dados) e direciona para a área correspondente do sistema.
7. O sistema autentica o usuário, inicia a sessão e o redireciona para a tela principal.

**Fluxo Alternativo A – Campos não preenchidos:**

a) O sistema identifica ausência de preenchimento em um ou mais campos obrigatórios.<br>
b) O sistema exibe mensagem de erro solicitando o preenchimento correto.<br>
c) O fluxo retorna ao passo 2.<br>

**Fluxo Alternativo B – Erro de login:**

a) O sistema identifica que as credenciais são inválidas ou o usuário não existe.<br>
b) O sistema apresenta mensagem de erro de autenticação.<br>
c) O fluxo retorna ao passo 2.<br>

**Pós-condições:** O usuário é autenticado e acessa o sistema com as permissões devidas ao seu perfil.


#### **Fazer Cadastro (CSU02)**

**Sumário:** Permite que um novo Cliente realize o seu auto-cadastro na plataforma para utilizar os recursos do sistema. Por questões de segurança e integridade dos dados, esta funcionalidade é restrita à criação de contas do tipo "Cliente".<br>
**Ator Primário:** Cliente.<br>
**Pré-condições:** O interessado não deve possuir cadastro prévio com o e-mail informado.<br>

**Fluxo Principal:**

1. O Cliente acessa a opção de cadastro na tela inicial.
2. O sistema apresenta o formulário com os campos de identificação (nome, e-mail, idade, senha).
3. O Cliente preenche os dados solicitados.
4. O sistema valida o preenchimento e o formato dos dados.
5. O sistema executa a funcionalidade **Verificar idade mínima de 18 anos** `<<include>>`.
6. O sistema registra o novo usuário no banco de dados com o papel (`role`) definido automaticamente como "Cliente".
7. O sistema confirma a criação da conta e redireciona o novo Cliente para a tela de login.

**Fluxo Alternativo A – Idade insuficiente:**

a) O sistema identifica que o Cliente possui menos de 18 anos.<br>
b) O sistema informa a impossibilidade de conclusão do cadastro por restrição de idade.<br>
c) O caso de uso é encerrado.<br>

**Pós-condições:** Um novo usuário é criado e pode realizar login no sistema.


## **Visualizar Refeições (CSU03)**

**Sumário:** Permite ao Cliente e ao Gestor de Dados visualizar as refeições disponíveis no sistema.  
**Ator Primário:** Cliente  
**Ator Secundário:** Gestor de Dados  
**Pré-condições:** O usuário deve estar autenticado no sistema.  

**Fluxo Principal:**

1. O Cliente ou Gestor de Dados acessa a funcionalidade de visualização de refeições.
2. O sistema exibe a lista de refeições disponíveis.
3. O Cliente ou Gestor de Dados seleciona uma refeição.
4. O sistema apresenta os detalhes da refeição selecionada.

**Pós-condições:** A refeição selecionada é exibida ao usuário.


#### **Monitorar Peso (IMC) (CSU04)**

**Sumário:** Permite ao Cliente registrar o peso e calcular o Índice de Massa Corporal (IMC).<br>
**Ator Primário:** Cliente.<br>
**Pré-condições:** O Cliente deve estar autenticado no sistema.<br>

**Fluxo Principal:**

1. O Cliente acessa a funcionalidade de monitoramento de peso/IMC.
2. O sistema apresenta o histórico de registros.
3. O Cliente informa o peso atual.
4. O sistema recupera a altura cadastrada no perfil.
5. O sistema realiza o cálculo automático do IMC.
6. O sistema apresenta o valor calculado e sua classificação correspondente.
7. O sistema salva o novo registro no histórico.

**Pós-condições:** O peso é registrado e o IMC é calculado e armazenado no sistema.


#### **Gerenciar Preferências Alimentares (CSU05)**

**Sumário:** Permite ao Cliente definir restrições e preferências alimentares para personalizar o sistema.<br>
**Ator Primário:** Cliente.<br>
**Pré-condições:** O Cliente deve estar autenticado no sistema.<br>

**Fluxo Principal:**

1. O Cliente acessa as configurações de perfil alimentar.
2. O sistema apresenta as preferências cadastradas e novas categorias disponíveis.
3. O Cliente seleciona ou altera as opções desejadas (ex: Vegano, Sem Glúten).
4. O sistema valida as alterações.
5. O sistema atualiza o perfil do Cliente no banco de dados.
6. O sistema confirma a atualização realizada.

**Pós-condições:** As preferências alimentares do Cliente são atualizadas no sistema.


## **Organizar Agenda de Refeições (CSU06)**

**Sumário:** Permite ao Cliente e ao Gestor de Dados organizar o planejamento de refeições.  
**Ator Primário:** Cliente  
**Ator Secundário:** Gestor de Dados  
**Pré-condições:** O usuário deve estar autenticado no sistema.  

**Fluxo Principal:**

1. O Cliente ou Gestor de Dados acessa a agenda de refeições.
2. O sistema exibe os dias e horários disponíveis.
3. O usuário seleciona um dia e horário.
4. O usuário escolhe uma refeição.
5. O sistema executa o caso de uso **Consultar estoque** `<<include>>`.
6. O sistema valida a disponibilidade dos alimentos.
7. O sistema salva a refeição na agenda.

**Pós-condições:** A agenda de refeições é atualizada com o novo planejamento.


## **Visualizar Informações Nutricionais (CSU07)**

**Sumário:** Permite ao Cliente e ao Gestor de Dados visualizar o detalhamento nutricional de alimentos ou refeições.  
**Ator Primário:** Cliente  
**Ator Secundário:** Gestor de Dados  
**Pré-condições:** O usuário deve estar autenticado no sistema.  

**Fluxo Principal:**

1. O Cliente ou Gestor de Dados seleciona um alimento ou refeição.
2. O sistema executa o caso de uso **Consultar estoque** `<<include>>`.
3. O sistema exibe os dados nutricionais (calorias, proteínas, carboidratos e gorduras).

**Pós-condições:** As informações nutricionais são exibidas ao usuário.


## **Gerenciar Inventário de Alimentos (CSU08)**

**Sumário:** Permite ao Cliente gerenciar o inventário de alimentos disponíveis no sistema.  
**Ator Primário:** Cliente  
**Pré-condições:** O Cliente deve estar autenticado no sistema.  

**Fluxo Principal:**

1. O Cliente acessa o módulo de inventário.
2. O sistema exibe os alimentos cadastrados.
3. O Cliente adiciona, altera ou remove alimentos.
4. O sistema valida os dados informados.
5. O sistema atualiza o inventário e executa o caso de uso **Consultar estoque** `<<include>>`.

**Pós-condições:** O inventário de alimentos é atualizado.


## **Gerar Lista de Compras (CSU09)**

**Sumário:** Permite ao Cliente gerar listas de compras com base em sua rotina alimentar.  
**Ator Primário:** Cliente  
**Pré-condições:** O Cliente deve estar autenticado no sistema.  

**Fluxo Principal:**

1. O Cliente solicita a geração da lista de compras.
2. O sistema analisa os alimentos necessários e **Consultar estoque** `<<include>>`.
3. O sistema gera a lista de compras.
4. O sistema exibe a lista ao Cliente.

**Pós-condições:** A lista de compras é gerada e disponibilizada ao Cliente.


## **Gerar Relatórios (CSU10)**

**Sumário:** Permite ao Cliente gerar relatórios de acompanhamento de dieta e progresso.  
**Ator Primário:** Cliente  
**Pré-condições:** O Cliente deve estar autenticado no sistema.  

**Fluxo Principal:**

1. O Cliente solicita a geração de relatórios.
2. O sistema coleta os dados de acompanhamento.
3. O sistema gera um ou mais relatórios.
4. O sistema exibe os relatórios ao Cliente.

**Pós-condições:** Os relatórios são gerados e disponibilizados ao Cliente.


### 3.4.3 Diagrama de Classes 

A Figura 2 apresenta o diagrama de classes do sistema BEFIT. Nele, a classe Users centraliza os dados cadastrais e objetivos do Cliente, enquanto Foods e Meals representam os alimentos e refeições disponíveis no sistema. A relação entre refeições e ingredientes é modelada por Meal_Ingredients, e o planejamento alimentar é organizado por Meal_Plans e Meal_Plan_Items. O acompanhamento do consumo é registrado em Consumption_Logs, a lista de compras é controlada por Shopping_Lists, o estoque doméstico é mantido em User_Inventories e a evolução de peso e IMC é armazenada em Weight_Histories. A classe Migrations possui função técnica de controle da estrutura do banco de dados.

#### Figura 2: Diagrama de Classes do Sistema.
 
<img width="6123" height="8192" alt="diagrama_classe" src="https://github.com/user-attachments/assets/626751ca-2cca-466a-be8d-a81c1065d718" />



### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Users |	Armazena o perfil completo do Cliente, incluindo dados cadastrais, altura, idade, objetivos e preferências alimentares. |
| 2	| Foods |	Catálogo de alimentos com porções unitárias e detalhamento nutricional (calorias, proteínas, carboidratos e gorduras). |
| 3 |	Meals |	Define as refeições especificando complexidade, tempo de preparo e valores nutricionais. |
| 4 |	Meal_Ingredients |	Relaciona alimentos à refeições, definindo a quantidade exata de cada ingrediente por refeição. |
| 5	|	Meal_Plans |	Estabelece o cronograma alimentar do Cliente, definindo os períodos de início e fim da dieta planejada. |
| 6 |	Meal_Plan_Items |	Detalha a agenda do plano, vinculando o dia da semana e o tipo de refeição (café, almoço, jantar) às refeições cadastradas. |
| 7 |	Consumption_Logs |	Registra o histórico real de consumo do Cliente, facilitando o acompanhamento diário da dieta. |
| 8 |	Shopping_Lists |	Gera a lista de compras com base no estoque disponível e cronograma da semana. |
| 9 |	User_Inventories |	Controla o estoque de alimentos do Cliente, monitorando quantidades disponíveis e prazos de validade. |
| 10 |	Weight_Histories |	Armazena a evolução do Cliente, registrando variações de peso e cálculo automático de IMC. |
| 11 |	Migrations |	Gerencia o versionamento técnico da estrutura do banco de dados, garantindo a integridade das atualizações do sistema. |
