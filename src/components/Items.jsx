
function Items() {
  return (
    <div className="border-x-teal-200 shadow-xl border-2 rounded-lg  p-10">
        <img className="rounded-xl mb-5" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="item pic" />
        <hr className="mb-3" />
        <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">title</h3>
            <span className="text-xl font-medium">55$</span>
        </div>
    </div>
  )
}

export default Items;