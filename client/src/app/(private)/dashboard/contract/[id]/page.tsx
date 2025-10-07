import ContractResults from "./_components/contract-results";

interface IContractResultsProps {
  params: Promise<{ id: string }>;
}

export default async function ContractPage({ params }: IContractResultsProps) {
  const { id } = await params;
  return <ContractResults contractId={id} />;
}
