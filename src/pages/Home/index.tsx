import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input"
import { withMask } from 'use-mask-input';
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [celular, setCelular] = useState('');
  const [cpf, setCpf] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log({ celular, cpf });
  }, [celular, cpf]);

  const stripMask = (maskedValue: any) => {
    return maskedValue.replace(/\D/g, ''); // Removes all non-digit characters
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 items-center justify-center p-8 flex">
      <div className="bg-secondary rounded-md w-screen-2xl flex-1 p-2">
        <div className="grid grid-cols-2 gap-2 p-8">
          <Input placeholder="Nome completo" />
          <Input placeholder="Logradouro" />
          <Input placeholder="Numero" />
          <Input placeholder="Bairro" />
          <Input placeholder="Cidade" />
          <Input placeholder="UF" />
          <Input placeholder="CEP" />
          <Input placeholder="Nascimento" />
          <Input placeholder="Estado Civil" />
          <Input placeholder="Nome da Mãe" />
          <Input placeholder="Nome do Pai" />
          <Input placeholder="Nacionalidade" />
          <Input placeholder="Naturalidade" />
          <Input placeholder="Escolaridade" />
          <Input placeholder="Raça" />
          <Input
            placeholder="Celular"
            type="text"
            value={celular}
            ref={withMask('(99) 99999-9999')}
            onChange={(e) => setCelular(stripMask(e.target.value))}
          />
          <Input placeholder="Agencia e Conta Bancaria" />
          <Input placeholder="Conta" />
          <Input placeholder="RG" />
          <Input placeholder="Emissão RG" />
          <Input placeholder="Órgão Expeditor" />
          <Input placeholder="Emissão RG" />
          <Input
            placeholder="Celular"
            type="text"
            value={cpf}
            ref={withMask('999.999.999-99')}
            onChange={(e) => setCpf(stripMask(e.target.value))}
          />
          <Input placeholder="PIS" />
          <Input placeholder="Numero Carteira de Trabalho" />
          <Input placeholder="Serie Carteira de Trabalho" />
          <Input placeholder="Emissão Carteira de Trabalho" />
          <Input placeholder="Estado Carteira de Trabalho" />
        </div>
        <Button className="w-full bg-transparent hover:bg-transparent text-black hover:text-purple-500">Cancelar</Button>
        <Button className="w-full" disabled={isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Salvar/Integrar'}
        </Button>
      </div>
    </div>
  );
}
