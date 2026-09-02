# CLAUDE.md — Template

Preencha as seções entre colchetes com as informações do projeto. As seções sem colchetes já são conduta padrão e podem ficar como estão.

## O que é este projeto

[Uma ou duas frases: o que o projeto faz, para quem, em que contexto ele roda.]

**Stack:**
- [Framework/linguagem principal]
- [Camada de API/backend, e como ela é chamada — HTTP separado? in-process?]
- [Banco de dados / ORM]
- [Autenticação]
- [Biblioteca de UI / componentes]
- [Gerenciamento de estado relevante — URL state, cache client-side, etc.]

**Explicitamente fora do stack:** [liste o que NÃO usar, se houver algo que alguém possa tentar introduzir por hábito — ex: "não usar Redux", "não usar MUI"]

**Requisitos que NÃO existem** (evita trabalho não pedido): [ex: "sem requisito de dark mode", "sem requisito de i18n"]

## Antes de implementar qualquer coisa

Não comece a escrever código a partir do primeiro pedido. Primeiro:

1. **Investigue o estado atual do código relevante.** Leia os arquivos existentes na área que será alterada antes de propor mudanças.
2. **Liste os gaps reais**, não os sintomas. Se o pedido é "adicionar X", identifique exatamente o que impede X hoje e em qual camada. Estruture como gap → verificação, com arquivo/trecho que comprova cada gap.
3. Só depois disso, planeje a implementação.

Isso vale mesmo quando o pedido parece simples — pode esconder um problema estrutural maior que o pedido em si.

## Arquitetura — regras que não podem ser quebradas

[Liste aqui as convenções inegociáveis do projeto. Exemplos do tipo de regra que costuma valer a pena documentar:]

- [Separação de camadas — ex: repository não tem lógica de negócio, service orquestra, route só valida/formata]
- [Onde fica a fonte única de verdade de tipos — ex: gerados do schema do banco, não duplicados manualmente]
- [Como mutações se propagam — ex: revalidação de cache, invalidação de query]
- [Padrão de formulários, se houver um estabelecido]
- [Onde vive estado que precisa sobreviver a refresh/ser compartilhável, vs. estado local efêmero]

Se uma mudança pedida violaria uma dessas regras, isso é um gap a ser reportado antes de implementar — não uma decisão a tomar silenciosamente.

## Padrões de UI/UX já estabelecidos

[Liste convenções visuais e de comportamento que já existem no projeto e devem ser replicadas, não reinventadas a cada tela nova — ex: como empty states são tratados, como erros são exibidos, convenções de nomenclatura de componentes.]

## O que reportar no fim de uma task (definition of done)

Ao terminar uma implementação, o resumo/PR deve conter:

1. **O que foi feito** — em termos funcionais, do ponto de vista de quem usa o sistema.
2. **Por quê** — decisões não óbvias explicadas, não só o "o quê".
3. **O que foi deliberadamente deixado de fora**, se algo adjacente foi considerado e descartado.
4. **Gate de qualidade** — comandos exatos a rodar antes de considerar a task pronta:
   - Lint: `[comando]`
   - Typecheck: `[comando]`
   - Testes: `[comando]`
   
   Se algum desses ainda não existir no projeto, sinalizar isso em vez de pular a etapa silenciosamente.

## Estilo de comunicação esperado

- Indicar suposições feitas explicitamente quando o pedido for ambíguo, em vez de assumir silenciosamente ou fazer múltiplas perguntas.
- Preferir arquivos completos e prontos para colar a diffs parciais, a menos que a mudança seja pequena e localizada.
- Intervenção mínima: preservar lógica existente que já funciona; não refatorar código não relacionado ao pedido.