const TEMPLATE = `
<nav class="flex flex-col max-w-xs max-h-screen min-h-screen p-6 text-white shadow-xl bg-sky-700">
  <h2 class="text-2xl text-center"><a href="/">Reservacion app</a></h2>
  <div class="w-full h-1 my-3 bg-white rounded"></div>
  <ul class="my-2">
    <li class="rounded hover:bg-sky-900">
      <a href="client/" class="block p-3">Clientes</a>
    </li>
    <li class="rounded hover:bg-sky-900">
      <a href="box/" class="block p-3">Palcos</a>
    </li>
    <li class="rounded hover:bg-sky-900">
      <a href="category/" class="block p-3">Categorias</a>
    </li>
    <li class="rounded hover:bg-sky-900">
      <a href="reservation/" class="block p-3">Reservaciones</a>
    </li>
    <li class="rounded hover:bg-sky-900">
      <a href="message/" class="block p-3">Mensajes</a>
    </li>
    <li class="rounded hover:bg-sky-900">
      <a href="score/" class="block p-3">Score</a>
    </li>
    <li class="rounded hover:bg-sky-900">
      <a href="admin/" class="block p-3">Admin</a>
    </li>
  </ul>
  <div class="flex justify-between mt-auto">
    <span class="p-2 text-center">Nombre usuario</span>
    <button class="px-6 py-2 font-semibold rounded hover:bg-sky-900">Salir</button>
  </div>
</nav>`;

export default TEMPLATE;
