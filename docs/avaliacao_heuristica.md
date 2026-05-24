# Avaliação Heurística — BeFit

## Identificação

| Item           | Descrição                                              |
|----------------|--------------------------------------------------------|
| **Sistema**    | BeFit — Aplicativo de Gestão Alimentar e Qualidade de Vida |
| **Versão**     | Sprint final (branch `dev/av-heuristica`)              |
| **Data**       | 23/05/2026                                             |
| **Método**     | Avaliação Heurística baseada nas 10 Heurísticas de Nielsen |
| **Avaliador**  | Equipe BeFit                                           |

---

## Escala de Severidade

| Nível | Classificação      | Descrição                                                             |
|-------|--------------------|-----------------------------------------------------------------------|
| 0     | Sem problema       | Não é um problema de usabilidade                                      |
| 1     | Cosmético          | Não precisa ser corrigido imediatamente, apenas se houver tempo       |
| 2     | Pequeno            | Baixa prioridade de correção                                          |
| 3     | Grande             | Alta prioridade — deve ser corrigido antes do lançamento              |
| 4     | Catastrófico       | Imperativo corrigir — impede o uso do sistema                         |

---

## Resumo dos Problemas Encontrados

| ID    | Heurística                                    | Tela Afetada                   | Severidade |
|-------|-----------------------------------------------|--------------------------------|------------|
| H1-1  | Visibilidade do status do sistema             | Cadastro de Dieta              | 2          |
| H1-2  | Visibilidade do status do sistema             | Geração de Relatório (PDF)     | 2          |
| H1-3  | Visibilidade do status do sistema             | Agenda                         | 2          |
| H2-1  | Correspondência com o mundo real              | Cálculo de IMC                 | 2          |
| H2-2  | Correspondência com o mundo real              | Agenda                         | 2          |
| H3-1  | Controle e liberdade do usuário               | Cadastro de Dieta / Compras    | 3          |
| H3-2  | Controle e liberdade do usuário               | Modal de Cadastro/Login        | 1          |
| H4-1  | Consistência e padrões                        | Receitas (duplicidade de tela) | 2          |
| H4-2  | Consistência e padrões                        | Relatórios (dois arquivos)     | 2          |
| H5-1  | Prevenção de erros                            | Cálculo de IMC                 | 3          |
| H5-2  | Prevenção de erros                            | Cadastro de Dieta              | 2          |
| H6-1  | Reconhecimento em vez de lembrança            | Cadastro de Dieta / Agenda     | 2          |
| H7-1  | Flexibilidade e eficiência de uso             | Global                         | 2          |
| H7-2  | Flexibilidade e eficiência de uso             | Agenda                         | 2          |
| H8-1  | Design estético e minimalista                 | Tela de IMC                    | 1          |
| H9-1  | Recuperação de erros                          | Login                          | 2          |
| H9-2  | Recuperação de erros                          | Cadastro / Dieta               | 2          |
| H10-1 | Ajuda e documentação                          | Global                         | 2          |
| H10-2 | Ajuda e documentação                          | Cálculo de IMC                 | 1          |

---

## Avaliação por Heurística

---

### H1 — Visibilidade do Status do Sistema

> O sistema deve sempre manter os usuários informados sobre o que está acontecendo, por meio de feedback adequado dentro de um tempo razoável.

#### Pontos Positivos

- A tela de **Lista de Compras** exibe um contador de progresso que indica quantos itens foram marcados, fornecendo feedback imediato sobre a conclusão da tarefa.
- A **Agenda** destaca visualmente o dia atual, orientando o usuário sobre sua posição no calendário.
- O campo de **confirmação de senha** no cadastro fornece feedback visual em tempo real durante o preenchimento.

#### Problemas Identificados

**[H1-1] Feedback de salvamento via `alert()` nativo sem desabilitar o botão — Severidade: 2**

Na tela de **Cadastro de Dieta**, ao salvar, o sistema exibe `alert('Dieta cadastrada com sucesso!')`. O feedback existe, mas usa o `alert()` nativo do navegador — quebrando a experiência visual da interface — e o botão "Salvar dieta" não é desabilitado durante o processo, permitindo que o usuário clique múltiplas vezes e cadastre dietas duplicadas.

**Recomendação:** Substituir o `alert()` por uma mensagem de sucesso inline e desabilitar o botão temporariamente após o clique para evitar submissões duplicadas.

---

**[H1-2] Nenhum indicador de progresso na geração de PDF — Severidade: 2**

A tela de **Relatórios** utiliza a biblioteca jsPDF para geração assíncrona do documento. Durante esse processo, a interface não exibe nenhum estado de carregamento, podendo fazer o usuário acreditar que o sistema travou.

**Recomendação:** Exibir uma mensagem como "Gerando relatório…" e desabilitar o botão enquanto o PDF está sendo gerado.

---

**[H1-3] Agenda não destaca o dia atual — Severidade: 2**

A tela de **Agenda** exibe o calendário mensal sem nenhum destaque visual para o dia de hoje. A documentação do projeto afirma que "o destaque do dia atual orienta o usuário", mas o comportamento real não implementa isso. O usuário precisa identificar manualmente qual é o dia atual para começar a planejar.

**Recomendação:** Destacar o dia atual com cor de fundo diferenciada (ex.: laranja ou verde) ou borda em negrito para orientar o usuário imediatamente ao abrir a tela.

---

### H2 — Correspondência com o Mundo Real

> O sistema deve falar a linguagem do usuário, com palavras, frases e conceitos familiares, seguindo convenções do mundo real.

#### Pontos Positivos

- A linguagem utilizada no sistema é acessível e orientada ao domínio nutricional (refeições, receitas, alimentos, IMC).
- Os cards da Home utilizam ícones e rótulos reconhecíveis para cada funcionalidade.
- A terminologia interna de desenvolvimento (SHA-1, UUID, tokens) não é exposta ao usuário final.

#### Problemas Identificados

**[H2-1] Campo de altura em metros pode confundir usuários — Severidade: 2**

Na tela de **Cálculo de IMC**, o campo de altura solicita o valor em metros (ex.: "1.75"). A maioria das pessoas pensa em sua altura como "175 cm" e precisa fazer a conversão mental, aumentando a chance de entradas incorretas.

**Recomendação:** Aceitar a entrada em centímetros (ex.: "175") e realizar a conversão internamente, ou incluir um exemplo claro no placeholder (ex.: "Ex.: 1.75 m").

---

**[H2-2] Título "Planejar a Semana" mas exibe calendário mensal — Severidade: 2**

A tela de **Agenda** tem o título **"PLANEJAR A SEMANA"**, mas exibe um calendário com visão mensal completa (todos os dias do mês). Essa inconsistência entre o que o título promete e o que a interface entrega viola a correspondência com o modelo mental do usuário, que espera uma visão semanal ao ler o título.

**Recomendação:** Ajustar o título para "Planejar o Mês" ou implementar uma visão semanal como padrão, mantendo coerência entre o rótulo e a funcionalidade exibida.

---

### H3 — Controle e Liberdade do Usuário

> Usuários frequentemente escolhem funções por engano e precisam de uma "saída de emergência" claramente marcada para sair do estado indesejado sem ter de percorrer um diálogo extenso.

#### Pontos Positivos

- Os modais de **Login** e **Cadastro** possuem botão de fechar ("X"), permitindo cancelar a ação sem consequências.
- A tela de **Agenda** permite alternar visualizações e desfazer adições de receitas.
- O botão "Limpar" na tela de IMC permite redefinir os campos facilmente.

#### Problemas Identificados

**[H3-1] Ausência de confirmação antes de ações destrutivas — Severidade: 3**

Nas telas de **Cadastro de Dieta** e **Lista de Compras**, o método `delete()` executa a remoção e atualiza o localStorage diretamente, sem nenhuma confirmação. Em todo o projeto há apenas um `confirm()` — para "Deseja ver a agenda?" em receitas.js — não para exclusões. A remoção é permanente e irreversível.

**Recomendação:** Implementar um diálogo de confirmação ("Tem certeza que deseja excluir este item?") ou um mecanismo de desfazer temporário (ex.: "Item removido. [Desfazer]" com timeout de 5 segundos).

---

**[H3-2] Formulário é limpo ao fechar sem aviso — Severidade: 1**

Ao preencher o formulário de **Cadastro** (nome, e-mail, senha) e clicar no botão "X", o sistema redireciona imediatamente para a tela inicial sem nenhum aviso, perdendo todos os dados digitados.

**Recomendação:** Exibir uma confirmação caso o usuário tente fechar o modal com campos preenchidos ("Deseja sair? Os dados inseridos serão perdidos.").

---

### H4 — Consistência e Padrões

> Usuários não deveriam ter que se perguntar se palavras diferentes, situações ou ações significam a mesma coisa.

#### Pontos Positivos

- A paleta de cores (laranja, verde, branco) e a tipografia são aplicadas de forma consistente em todas as telas.
- A barra de navegação superior aparece em todas as páginas após o login com os mesmos itens.
- Os cards da tela Home seguem padrão visual uniforme.

#### Problemas Identificados

**[H4-1] Duplicidade de tela de receitas com layouts incompatíveis — Severidade: 2**

O sistema possui dois arquivos HTML para receitas com layouts completamente distintos: `receitas/receitas.html` usa uma **tabela** com colunas (Receita, Tempo, Complexidade, Favorito); `Cadastrar_dieta/receitas.html` usa **cards verticais** com botão "Adicionar à Agenda". Nenhuma das duas telas indica claramente seu contexto ou diferença de propósito ao usuário.

**Recomendação:** Diferenciar claramente os títulos (ex.: "Catálogo de Receitas" vs. "Receitas Sugeridas para sua Agenda") e garantir consistência visual entre as duas telas.

---

**[H4-2] Dois arquivos de relatório com layouts e estruturas incompatíveis — Severidade: 2**

`relatorios.html` exibe dois cards separados (Consumo | IMC) com botões individuais de geração. `relatorios_2.html` exibe uma hero page com headline "Chegou a hora de ser fitness!" e um único botão "GERAR RELATÓRIO". São experiências completamente diferentes, com identidades visuais distintas, para o mesmo módulo de relatórios.

**Recomendação:** Unificar em uma única tela ou garantir que ambas sigam o mesmo guia visual e estrutura, com navegação clara entre elas.

---

### H5 — Prevenção de Erros

> Melhor do que boas mensagens de erro é um design cuidadoso que previne a ocorrência de problemas.

#### Pontos Positivos

- O cadastro valida a confirmação de senha em tempo real.
- O sistema verifica a idade mínima de 18 anos durante o cadastro.
- A validação de e-mail é aplicada no formulário de registro.

#### Problemas Identificados

**[H5-1] Ausência de validação de limites no cálculo de IMC — Severidade: 3**

A tela de **Cálculo de IMC** não valida se os valores inseridos estão dentro de intervalos fisiologicamente razoáveis. Com peso de 999 kg e altura de 0,01 m, o sistema calcula e exibe **IMC = 9.990.000,0 — Obesidade Grau 3**, salvando esse resultado no histórico sem nenhum aviso.

**Recomendação:** Definir limites de validação realistas (ex.: peso entre 20 e 300 kg, altura entre 0,5 m e 2,5 m) e exibir mensagem de erro clara caso o valor esteja fora da faixa.

---

**[H5-2] Botão "Salvar dieta" ativo mesmo com dieta vazia — Severidade: 2**

Na tela de **Cadastro de Dieta**, o botão "Salvar dieta" permanece habilitado mesmo quando a área de composição exibe "Nenhum alimento adicionado ainda.", permitindo salvar um registro vazio no localStorage sem qualquer alerta ao usuário.

**Recomendação:** Desabilitar o botão "Salvar" enquanto nenhum alimento tiver sido adicionado, ou exibir uma mensagem de alerta informando que a dieta está vazia.

---

### H6 — Reconhecimento em Vez de Lembrança

> Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis. O usuário não deveria ter que lembrar informações de uma parte da interface para outra.

#### Pontos Positivos

- A tela **Home** usa cards com imagens e ícones que auxiliam no reconhecimento visual das funcionalidades.
- A tela de **Receitas** exibe todas as informações relevantes (nome, tempo, dificuldade) diretamente na listagem, sem necessidade de acessar cada item individualmente.
- A tabela de classificação do IMC está visível na mesma tela do cálculo, eliminando a necessidade de o usuário lembrar as faixas.

#### Problemas Identificados

**[H6-1] Cadastro de alimentos sem autocomplete ou lista de sugestões — Severidade: 2**

Na tela de **Cadastro de Dieta**, o campo "Alimento" é um input de texto livre (placeholder: "Ex. arroz integral") sem qualquer sugestão ou autocomplete. O usuário precisa digitar manualmente o nome dos alimentos, forçando memorização de nomes exatos, unidades de medida e formatos aceitos.

**Recomendação:** Implementar um campo de busca com sugestões baseadas em uma lista pré-cadastrada de alimentos comuns, permitindo que o usuário selecione em vez de memorizar e digitar.

---

### H7 — Flexibilidade e Eficiência de Uso

> Aceleradores — invisíveis para o usuário novato — frequentemente permitem ao usuário experiente realizar tarefas com mais rapidez. O sistema deve atender tanto a usuários inexperientes quanto a experientes.

#### Pontos Positivos

- A navbar fixa em todas as telas permite acesso direto a qualquer funcionalidade sem retornar à Home.
- O botão "Mostrar Último IMC" permite acesso rápido ao histórico sem gerar um relatório completo.

#### Problemas Identificados

**[H7-1] Ausência de atalhos de teclado e busca global — Severidade: 2**

O sistema não oferece nenhum atalho de teclado para ações frequentes (ex.: salvar dieta, adicionar item à lista de compras) nem uma busca global que permita localizar receitas, alimentos ou informações de qualquer tela. A navbar contém apenas links de navegação.

**Recomendação:** Adicionar ao menos uma barra de busca global acessível pela navbar para localizar receitas e alimentos, e implementar atalhos básicos (Enter para confirmar, Escape para fechar modais).

---

**[H7-2] Agenda sem opção de copiar semana anterior — Severidade: 2**

Usuários que mantêm uma rotina alimentar semelhante precisam recriar manualmente o planejamento da Agenda toda semana, sem poder duplicar ou copiar a configuração de uma semana para outra.

**Recomendação:** Adicionar um botão "Copiar semana anterior" que replique automaticamente as receitas da semana passada para a semana atual, permitindo ajustes pontuais.

---

### H8 — Estética e Design Minimalista

> As interfaces não devem conter informações irrelevantes ou raramente necessárias. Cada unidade extra de informação em uma interface compete com as informações relevantes e diminui sua visibilidade relativa.

#### Pontos Positivos

- A tela Home apresenta apenas os 6 cards das funcionalidades principais, sem poluição visual.
- O uso de ícones e imagens temáticas reduz a necessidade de texto explicativo extenso.
- A identidade visual (laranja, verde, branco) é limpa e coerente com o tema de saúde e bem-estar.

#### Problemas Identificados

**[H8-1] Tabela do IMC exibe todas as categorias sem destaque da categoria atual — Severidade: 1**

Após o cálculo do IMC, o resultado é exibido textualmente acima da tabela, mas nenhuma linha é destacada para indicar visualmente a categoria correspondente. O usuário precisa ler todas as 6 linhas para encontrar sua faixa — informação que já está disponível no resultado textual.

**Recomendação:** Após o cálculo, destacar automaticamente com cor diferente a linha da tabela correspondente ao resultado obtido pelo usuário.

---

### H9 — Ajudar os Usuários a Reconhecer, Diagnosticar e Recuperar de Erros

> Mensagens de erro devem ser expressas em linguagem simples (sem códigos), indicar precisamente o problema e sugerir uma solução de forma construtiva.

#### Pontos Positivos

- O formulário de cadastro valida a confirmação de senha antes do envio.
- A tela de IMC possui o botão "Limpar" para permitir recomeçar o cálculo facilmente.

#### Problemas Identificados

**[H9-1] Mensagem de erro de login via `alert()` nativo sem destaque visual — Severidade: 2**

Ao inserir credenciais incorretas, o sistema exibe um `alert()` nativo do navegador com a mensagem **"Usuário ou senha incorretos."** A mensagem é corretamente genérica — diferenciar e-mail de senha seria uma vulnerabilidade de enumeração de usuários — porém o uso de `alert()` quebra a experiência visual da interface e não destaca nenhum campo do formulário como problemático.

**Recomendação:** Substituir o `alert()` por uma mensagem de erro inline dentro do formulário (abaixo do botão ou entre os campos), mantendo a redação genérica atual. Isso preserva a segurança e ainda melhora a experiência sem sair do contexto da página.

---

**[H9-2] Erros de validação exibidos via `alert()` sem destaque nos campos — Severidade: 2**

Na tela de **Cadastro**, ao submeter com senhas divergentes, o sistema exibe `alert('As senhas não se conferem')`. O alerta nativo fecha a experiência e retorna o usuário ao formulário sem nenhum destaque visual (borda vermelha, ícone de erro) nos campos problemáticos. O mesmo padrão se repete no Login.

**Recomendação:** Aplicar estilo visual diferenciado (ex.: borda vermelha + ícone de erro + mensagem abaixo do campo) em todos os campos que falharem na validação.

---

### H10 — Ajuda e Documentação

> Mesmo que seja melhor que o sistema possa ser usado sem documentação, pode ser necessário fornecer ajuda. Essas informações devem ser fáceis de encontrar, focadas nas tarefas do usuário e listadas em etapas concretas.

#### Pontos Positivos

- A interface é suficientemente intuitiva para não exigir documentação extensa, o que é comprovado pelo score SUS de 84,8.
- Os rótulos dos campos e botões são claros o suficiente para guiar o usuário na maioria dos fluxos.

#### Problemas Identificados

**[H10-1] Ausência de tutorial de primeiro uso (onboarding) — Severidade: 2**

A tela **Home** exibe diretamente os 6 cards funcionais sem nenhuma mensagem de orientação de primeiro acesso. A sequência lógica de uso (criar dieta → planejar agenda → gerar lista de compras) não é comunicada em lugar algum do sistema.

**Recomendação:** Implementar um fluxo de onboarding leve na primeira vez que o usuário acessa a Home após o cadastro, com 3–4 dicas rápidas destacando as principais funcionalidades e a ordem lógica de uso.

---

**[H10-2] Ausência de orientação sobre como medir a altura corretamente — Severidade: 1**

O campo de altura na tela de **IMC** não oferece nenhuma dica sobre como medir corretamente para obter resultados precisos — sem indicação de postura, calçado ou formato esperado.

**Recomendação:** Adicionar um ícone de ajuda (?) próximo ao campo de altura com tooltip explicativo: "Meça sua altura descalço em pé, com a cabeça em posição neutra."

---

## Consolidação dos Resultados

### Distribuição por Severidade

| Severidade       | Quantidade | Problemas                                                                        |
|------------------|------------|----------------------------------------------------------------------------------|
| 4 — Catastrófico | 0          | —                                                                                |
| 3 — Grande       | 2          | H3-1, H5-1                                                                       |
| 2 — Pequeno      | 14         | H1-1, H1-2, H1-3, H2-1, H2-2, H4-1, H4-2, H5-2, H6-1, H7-1, H7-2, H9-1, H9-2, H10-1 |
| 1 — Cosmético    | 3          | H3-2, H8-1, H10-2                                                                |
| 0 — Sem problema | —          | —                                                                                |

### Distribuição por Heurística

| Heurística                                    | Problemas | Máx. Severidade |
|-----------------------------------------------|-----------|-----------------|
| H1 — Visibilidade do Status                   | 3         | 2               |
| H2 — Correspondência com o Mundo Real         | 2         | 2               |
| H3 — Controle e Liberdade                     | 2         | 3               |
| H4 — Consistência e Padrões                   | 2         | 2               |
| H5 — Prevenção de Erros                       | 2         | 3               |
| H6 — Reconhecimento vs. Lembrança             | 1         | 2               |
| H7 — Flexibilidade e Eficiência               | 2         | 2               |
| H8 — Design Minimalista                       | 1         | 1               |
| H9 — Recuperação de Erros                     | 2         | 2               |
| H10 — Ajuda e Documentação                    | 2         | 2               |

---

## Priorização de Correções

### Alta Prioridade (Severidade 3)

1. **[H3-1]** Adicionar confirmação antes de ações destrutivas (excluir dieta, remover item da lista de compras).
2. **[H5-1]** Implementar validação de limites fisiológicos razoáveis no cálculo de IMC.

### Média Prioridade (Severidade 2)

3. **[H9-1]** Substituir `alert()` nativo por mensagem de erro inline no formulário de Login.
4. **[H9-2]** Aplicar destaque visual nos campos com erro de validação.
5. **[H5-2]** Desabilitar "Salvar dieta" quando nenhum alimento foi adicionado.
6. **[H6-1]** Autocomplete de alimentos no Cadastro de Dieta.
7. **[H1-3]** Destacar o dia atual na Agenda.
8. **[H2-2]** Corrigir título "Planejar a Semana" para corresponder à visão mensal exibida.
9. **[H7-1]** Busca global na navbar para localizar receitas e alimentos.
10. **[H7-2]** Copiar semana anterior na Agenda.
11. **[H10-1]** Onboarding para novos usuários.
12. **[H1-1]** Substituir `alert()` de confirmação de salvamento por feedback inline.
13. **[H1-2]** Indicador de progresso na geração de PDF.

### Baixa Prioridade (Severidade 1)

14. **[H8-1]** Destacar linha do IMC correspondente ao resultado do usuário.
15. **[H3-2]** Confirmar ao fechar modal com campos preenchidos.
16. **[H10-2]** Tooltip de orientação no campo de altura.

---

## Considerações Finais

O BeFit apresenta uma interface sólida e bem estruturada, com usabilidade validada pelo score SUS de **84,8** (classificado como Excelente). A avaliação heurística confirma os pontos fortes identificados nos testes com usuários: navegação consistente, linguagem acessível, boa integração entre funcionalidades e baixa carga cognitiva geral.

Os problemas encontrados são majoritariamente de **severidade 2** (pequenos), indicando que o sistema é funcional e utilizável em sua forma atual. Os dois problemas de **severidade 3** — ausência de confirmação em ações destrutivas e falta de validação no IMC — são os que mais impactam a experiência do usuário e devem ser endereçados com prioridade.

Nenhum problema catastrófico (severidade 4) foi identificado, o que demonstra a maturidade do design desenvolvido pela equipe.

---

## Apêndice — Cálculo do Score SUS (84,8)

O score SUS foi obtido aplicando a fórmula padrão da *System Usability Scale* sobre as **médias das respostas** dos 7 usuários.

### Fórmula

| Questão                  | Tipo     | Conversão    |
|--------------------------|----------|--------------|
| Ímpares (1, 3, 5, 7, 9)  | Positiva | `valor − 1`  |
| Pares (2, 4, 6, 8, 10)   | Negativa | `5 − valor`  |

**Score final = soma dos 10 valores convertidos × 2,5**

### Médias coletadas

| Q1  | Q2 | Q3  | Q4  | Q5  | Q6 | Q7  | Q8  | Q9  | Q10 |
|-----|----|-----|-----|-----|----|-----|-----|-----|-----|
| 4,6 | 2  | 4,9 | 1,7 | 4,1 | 1  | 4,7 | 1,6 | 4,3 | 2,4 |

### Aplicação da fórmula

**Questões positivas (ímpares):**

| Questão      | Média | Conversão (média − 1) |
|--------------|-------|----------------------|
| Q1           | 4,6   | 3,6                  |
| Q3           | 4,9   | 3,9                  |
| Q5           | 4,1   | 3,1                  |
| Q7           | 4,7   | 3,7                  |
| Q9           | 4,3   | 3,3                  |
| **Subtotal** |       | **17,6**             |

**Questões negativas (pares):**

| Questão      | Média | Conversão (5 − média) |
|--------------|-------|----------------------|
| Q2           | 2,0   | 3,0                  |
| Q4           | 1,7   | 3,3                  |
| Q6           | 1,0   | 4,0                  |
| Q8           | 1,6   | 3,4                  |
| Q10          | 2,4   | 2,6                  |
| **Subtotal** |       | **16,3**             |

**Soma total: 17,6 + 16,3 = 33,9**

**Score SUS = 33,9 × 2,5 = 84,75 ≈ 84,8**

### Interpretação

| Faixa    | Classificação |
|----------|---------------|
| < 51     | Inaceitável   |
| 51 – 67  | Ruim          |
| 68       | Média         |
| 69 – 80  | Boa           |
| > 80     | **Excelente** |

O BeFit obteve **84,8 → Excelente**, acima da média da indústria (68) e dentro da faixa de "Excelente" (> 80).

---

*Avaliação realizada com base nas 10 Heurísticas de Usabilidade de Jakob Nielsen (1994).*
