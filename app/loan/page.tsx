"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import emprestimoAPI from "../api/emprestimo";
import { maskAmount } from "../shared/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoanForm() {
  const [personId, setPersonId] = useState<number>(0);
  const [valor, setValor] = useState<number>(0);
  const [numeroParcelas, setNumeroParcelas] = useState<number>(0);
  const [open, setOpen] = useState(true);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await emprestimoAPI.createEmprestimo({
        personId,
        valor: Number(valor.toString().replace(/\D/g, "")),
        numeroParcelas,
      });

      if (response.status === 201) {
        toast.success("Empréstimo solicitado com sucesso.");
        setPersonId(0);
        setValor(0);
        setNumeroParcelas(0);
        setOpen(true);
      } else {
        toast.error("Erro ao solicitar empréstimo.");
      }
    } catch (error) {
      toast.error("An error occurred while making the request.");
    }
  };

  return (
    <>
      <main className="max-w-xl mx-auto py-6 sm:px-6 md:px-8 grid grid-cols-1 gap-12 border-2 border-white-200 p-4 rounded-lg bg-gray-100 p-8 mt-16">
        <div>
          <span className="text-4xl font-bold text-gray-800">
            Solicitar Empréstimo
          </span>
          <p className="text-xl text-gray-500">
            Preencha os campos abaixo para solicitar um empréstimo.
          </p>
        </div>

        <ToastContainer />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="personId"
              className="block text-sm font-medium text-gray-700"
            >
              ID da Pessoa
            </label>
            <input
              required
              type="number"
              id="personId"
              name="personId"
              value={personId}
              onChange={(e) => setPersonId(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Valor
            </label>
            <input
              required
              type="text"
              id="amount"
              name="amount"
              value={valor}
              onChange={(e) => setValor(maskAmount(e.target.value) as any)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="numberOfInstallments"
              className="block text-sm font-medium text-gray-700"
            >
              Número de Parcelas
            </label>
            <select
              required
              id="numberOfInstallments"
              name="numberOfInstallments"
              value={numeroParcelas}
              onChange={(e) => setNumeroParcelas(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="6">1</option>
              <option value="12">2</option>
              <option value="18">3</option>
              <option value="24">4</option>
              <option value="36">5</option>
              <option value="48">6</option>
            </select>
          </div>
          <div className="flex gap-4 justify-end">
            <Link
              href="/"
              className="inline-flex justify-center py-2 px-4 border border-gray-400 shadow-sm text-sm font-medium rounded-md text-black bg-white-600 hover:bg-white-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Cancelar
            </Link>

            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
            >
              Solicitar
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
