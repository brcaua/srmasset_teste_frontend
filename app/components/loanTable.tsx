"use client";
import React from "react";
import emprestimoAPI from "../api/emprestimo";

export default function LoanTable() {
  const [openModal, setOpenModal] = React.useState(false);
  const [loans, setLoans] = React.useState([]);

  React.useEffect(() => {
    emprestimoAPI.getEmprestimos().then((response) => {
      setLoans(response.data);
    });
  }, []);

  return (
    <table className="min-w-full divide-y divide-gray-200 text-black border border-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            ID
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Valor
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Número de Parcelas
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Status do Pagamento
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Opções
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Pagar</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {loans.map((loan: any) => (
          <tr key={loan.id}>
            <td className="px-6 py-4 text-center  whitespace-nowrap text-sm font-medium text-gray-900">
              {loan.id}
            </td>
            <td className="px-6 py-4 text-center  whitespace-nowrap text-sm text-gray-500">
              {loan.valor}
            </td>
            <td className="px-6 py-4 text-center  whitespace-nowrap text-sm text-gray-500">
              {loan.numeroParcelas}
            </td>
            <td className="px-6 py-4 text-center  whitespace-nowrap text-sm text-gray-500">
              {loan.statusPagamento}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="text-indigo-600 hover:text-indigo-900">
                Pagar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
