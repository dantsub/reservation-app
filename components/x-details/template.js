const TEMPLATE = `
<section class="my-4 bg-white rounded-lg">
  <header class="flex justify-between px-4 pt-4 pb-2 border-b">
    <h2 class="text-2xl text-sky-800">Detalles</h2>
    <div>
      <button title="editar" id="editar">
        <i class="text-xl text-slate-500 hover:text-slate-700 fi fi-rr-pencil"></i>
      </button>
      <button title="borrar" id="borrar">
        <i class="ml-2 text-xl text-slate-500 hover:text-slate-700 fi fi-rr-trash"></i>
      </button>
    </div>
  </header>
  <div class="grid grid-cols-1 divide-x divide-y md:grid-cols-2" id="detalles">
  </div>
</section>
`;

export default TEMPLATE;

