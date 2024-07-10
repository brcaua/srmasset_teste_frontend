"use client";
import Head from "next/head";
import Link from "next/link";
import LoanTable from "../components/loanTable";

export default function Painel() {
  return (
    <div className="max-w-4xl mx-auto py-6 sm:px-6 md:px-8 gap-12">
      <Head className="flex justify-between">
        <title>Formulário de Cadastro de Pessoas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-full mx-auto py-6 sm:px-8 md:px-8 flex flex-col gap-2">
        <div className="flex justify-between mt-8 mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Empréstimos</h1>

          <Link
            href="/loan"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Solicitar Empréstimo
          </Link>
        </div>

        <LoanTable
          loans={[]}
          onPay={function (loanId: number): void {
            throw new Error("Function not implemented.");
          }}
        />
      </main>
    </div>
  );
}
