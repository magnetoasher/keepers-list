`npm run dev` to run

## File structure

/pages => has all the pages <br />
/pages/common => all the shared components and functions <br />

.messages.ts => contains all the strings
.module.css => contains css for respective components
create.tsx => factory for respective component
schema.prisma => db schema
\*presenter.ts => where all the be logic should go <br />

## Dependencies

Prisma - db
MobX - state management
Typescript/React/Next.js - UI

## To do list

- [ ] Discord and twitter authentication
  - [ ] Fetch twitter and discord auth states
  - [ ] Fetch address
- [ ] Authentication for routes
  - [ ] Protect the application and success routes
- [ ] Form
  - [ ] Create mapping for prisma db
  - [ ] Push form data to db
- [ ] Metamask auth
  - [ ] Fetch address from metamask
  - [ ] Handle error states
    - [ ] Disconnect
    - [ ] Change wallet
    - [ ] Change chain
