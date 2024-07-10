"use client";
import Head from "next/head";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import pessoasAPI from "./api/pessoas";
import { redirectLoan } from "./shared/utils";

export default function Home() {
  const [nome, setNome] = useState<string>("");
  const [identificador, setIdentificador] = useState("");
  const [dataNascimento, setDataNascimento] = useState<any>();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!nome || !identificador || !dataNascimento) {
      toast.error("Please fill in all fields.");
      return;
    }

    const response = await pessoasAPI.createPessoa({
      nome,
      identificador,
      dataNascimento,
    });

    if (response.status === 201) {
      toast.success("Pessoa cadastrada com sucesso.");
      setNome("");
      setIdentificador("");
      setDataNascimento("");
      redirectLoan();
    } else {
      toast.error("Erro ao cadastrar pessoa.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6 sm:px-6 md:px-8 grid grid-cols-1 gap-2">
      <Head>
        <title>Formulário de Cadastro de Pessoas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <span className="text-4xl font-bold text-white-900">
          Cadastro de Pessoas
        </span>
        <p className="text-xl text-white-700">
          Preencha os campos abaixo para cadastrar uma pessoa.
        </p>
      </div>

      <ToastContainer />

      <main className="grid grid-cols-2 mt-12 w-full border-2 border-white-200 p-4 rounded-lg bg-gray-100 p-8">
        <Image
          src="welcome.svg"
          alt="Welcome"
          width={300}
          height={500}
          priority
          quality={80}
        />
        <form
          onSubmit={handleSubmit}
          className="space-y-4 col-span-1 flex flex-col justify-between"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome completo
            </label>
            <input
              required
              type="text"
              id="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome completo"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
            />
          </div>
          <div>
            <label
              htmlFor="identifier"
              className="block text-sm font-medium text-gray-700"
            >
              Identificador
            </label>
            <input
              required
              type="text"
              id="identifier"
              value={identificador}
              onChange={(e) => setIdentificador(e.target.value)}
              placeholder="CPF ou CNPJ"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-black"
            />
          </div>
          <div>
            <label
              htmlFor="birthDate"
              className="block text-sm text-black font-medium "
            >
              Data de Nascimento
            </label>
            <input
              required
              type="date"
              id="birthDate"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-gray-400"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded hover:bg-black-600"
          >
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}
