# Aula 03 - Introdução ao Versionamento e Deploy

**Professor:** Prof. Me. Deivison S. Takatu  
**E-mail:** deivison.takatu@fatec.sp.gov.br  

------------------------------------------------------------------------

## 📚 Sumário

- Introdução ao Versionamento e Backup  
- Versionamento Semântico (SemVer)  
- Git e Controle de Versão  
- Branches e Merge  
- Deploy e Hospedagem  
- Atividade  

------------------------------------------------------------------------

## 🔄 Versionamento x Backup

### Versionamento
- Histórico completo de alterações  
- Registro de quem alterou, quando e por quê  
- Permite colaboração simultânea  
- Possibilita reversão de versões específicas  

### Backup
- Cópia pontual do sistema  
- Sem histórico detalhado  
- Não permite colaboração eficiente  

------------------------------------------------------------------------

## ⚠️ Problemas sem Versionamento

- Arquivos duplicados (ex: versao_final2.zip)  
- Perda de código  
- Conflito entre desenvolvedores  
- Falta de histórico  

------------------------------------------------------------------------

## ✅ Benefícios do Versionamento

- Trabalho em equipe sem conflitos  
- Recuperação de versões anteriores  
- Rastreabilidade e auditoria  
- Menos retrabalho  

------------------------------------------------------------------------

## 🔢 Versionamento Semântico (SemVer)

Formato:
MAJOR.MINOR.PATCH

- **MAJOR:** mudanças incompatíveis  
- **MINOR:** novas funcionalidades compatíveis  
- **PATCH:** correção de bugs  

### 📌 Exemplos

- 1.0.0 → versão estável  
- 1.1.0 → nova funcionalidade  
- 1.1.1 → correção de bug  
- 2.0.0 → quebra de compatibilidade  

------------------------------------------------------------------------

## 🧾 Tipos de Alterações

- Bug Fix (correção)  
- New Feature (nova funcionalidade)  
- Enhancement (melhoria)  
- Refactoring (organização do código)  
- Performance  
- Security Patch  
- Update de dependências  

------------------------------------------------------------------------

## 🐙 Git e Controle de Versão

### 🔹 O que é Git?

- Sistema de controle de versão  
- Permite salvar histórico do projeto  
- Integra com plataformas online  

### 🔹 Funcionalidades

- Registrar versões  
- Restaurar versões antigas  
- Trabalhar em equipe  

------------------------------------------------------------------------

## 🌿 Branches no Git

- **Main/Master:** versão estável  
- **Develop:** integração de funcionalidades  
- **Feature:** desenvolvimento de novas funções  

### 🔹 Merge

- União de branches  
- Pode gerar conflitos (precisam ser resolvidos manualmente)  

------------------------------------------------------------------------

## 🏷️ Tags no Git

- Marcadores de versões (ex: v1.0.0)  
- Tipos:
  - Lightweight  
  - Annotated  

------------------------------------------------------------------------

## 📌 Boas Práticas com Git

- Commits pequenos e frequentes  
- Mensagens claras  
- Uso de branches  
- Testes antes de merge  

------------------------------------------------------------------------

## 🚀 Deploy e Hospedagem

### 🔹 O que é Deploy?

Processo de publicar o sistema para usuários.

### 🔹 Ambientes

- Desenvolvimento (local)  
- Staging (testes)  
- Produção (usuários finais)  

------------------------------------------------------------------------

## ☁️ Vercel (Deploy)

- Integração com GitHub  
- Deploy automático  
- Alta performance  
- Escalabilidade  
- CDN global  

------------------------------------------------------------------------

## 📝 Atividade

1. Criar repositório no GitHub com projeto simples  
2. Versionar usando Git e tags  
3. Fazer deploy no Vercel  
4. Documentar todo o processo com prints e explicações  

------------------------------------------------------------------------

## 📖 Referências

- Versionamento com Git  
- DevOps e Deploy  
- Desenvolvimento Web Moderno  
