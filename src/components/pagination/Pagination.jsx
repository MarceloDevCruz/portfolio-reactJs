import React from 'react';
import { Container } from './styled';

const Pagination = () => {
  const context = useContext(CreateContext);

  const MAXIMO_ITEMS = 3;
  const MAXIMO_ESQUERDA = (MAXIMO_ITEMS - 1) / 2;

  const paginaAtual = context.offSet ? context.offSet / context.limite + 1 : 1;
  const totalPaginas = Math.ceil(context.total / context.limite);
  const primeiraPagina = Math.max(totalPaginas - (MAXIMO_ITEMS - 1), 1);
  const primera = Math.min(
    Math.max(paginaAtual - MAXIMO_ESQUERDA, 1),
    primeiraPagina
  );

  return (
    <Container>
      {Array.from({ length: Math.min(MAXIMO_ITEMS, totalPaginas) })
        .map((_, index) => index + primera)
        .map((pagina) => (
          <li key={pagina}>
            <button
              onClick={() => context.setOffSet((pagina - 1) * context.limite)}
            >
              {pagina}
            </button>
          </li>
        ))}
    </Container>
  );
};

export default Pagination;
