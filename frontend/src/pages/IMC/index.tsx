import { useState } from 'react'
import { Calculator, RotateCcw, Save } from 'lucide-react'
import { Button } from '../../components/Button'
import { InputField } from '../../components/InputField'
import balanca from '../../assets/balanca.jpg'
import {
  Wrapper,
  LeftPanel,
  RightPanel,
  RightImage,
  PageTitle,
  Description,
  FormRow,
  ResultCard,
  ResultLabel,
  ResultValue,
  ResultClass,
  GaugeBar,
  GaugeFill,
  GaugeLabels,
  GaugeLabel,
  Actions,
  TableWrapper,
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
} from './styles'

interface ClassificacaoIMC {
  label: string
  grau: string
  color: string
  min: number
  max: number
}

const classificacoes: ClassificacaoIMC[] = [
  { label: 'Magreza',        grau: '0',   color: '#60a5fa', min: 0,    max: 18.5 },
  { label: 'Normal',         grau: '0',   color: '#4ade80', min: 18.5, max: 25   },
  { label: 'Sobrepeso',      grau: 'I',   color: '#facc15', min: 25,   max: 30   },
  { label: 'Obesidade',      grau: 'II',  color: '#fb923c', min: 30,   max: 40   },
  { label: 'Obesidade Grave',grau: 'III', color: '#f87171', min: 40,   max: 60   },
]

function classificarIMC(imc: number): ClassificacaoIMC {
  return classificacoes.find(c => imc < c.max) ?? classificacoes[classificacoes.length - 1]
}

function gaugePercent(imc: number): number {
  const min = 10, max = 50
  return Math.min(100, Math.max(0, ((imc - min) / (max - min)) * 100))
}

export function IMC() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState<{ imc: number; classe: ClassificacaoIMC } | null>(null)
  const [errors, setErrors] = useState<{ peso?: string; altura?: string }>({})

  function calcular() {
    const p = parseFloat(peso.replace(',', '.'))
    const a = parseFloat(altura.replace(',', '.'))
    const next: typeof errors = {}

    if (!peso || isNaN(p) || p <= 0) next.peso = 'Informe um peso válido.'
    if (!altura || isNaN(a) || a <= 0) next.altura = 'Informe uma altura válida (ex: 1.70).'

    if (Object.keys(next).length) { setErrors(next); return }
    setErrors({})

    const imc = p / (a * a)
    setResultado({ imc, classe: classificarIMC(imc) })
  }

  function limpar() {
    setPeso('')
    setAltura('')
    setResultado(null)
    setErrors({})
  }

  return (
    <Wrapper>
      <LeftPanel>
        <PageTitle><Calculator size={22} /> Cálculo de IMC</PageTitle>

        <Description>
          O IMC (Índice de Massa Corporal) é calculado dividindo o peso pela altura ao quadrado.
          Considera-se peso normal quando o IMC está entre <strong>18,5</strong> e <strong>24,9</strong>.
        </Description>

        <FormRow>
          <InputField
            id="peso"
            label="Peso (kg)"
            type="number"
            placeholder="Ex.: 69.2"
            step={0.1}
            min={1}
            value={peso}
            onChange={e => setPeso(e.target.value)}
            error={errors.peso}
          />
          <InputField
            id="altura"
            label="Altura (m)"
            type="number"
            placeholder="Ex.: 1.70"
            step={0.01}
            min={0.5}
            max={3}
            value={altura}
            onChange={e => setAltura(e.target.value)}
            error={errors.altura}
          />
        </FormRow>

        <Actions>
          <Button onClick={calcular}>
            <Calculator size={16} /> Calcular
          </Button>
          <Button variant="secondary" onClick={limpar}>
            <RotateCcw size={16} /> Limpar
          </Button>
        </Actions>

        {resultado && (
          <ResultCard $color={resultado.classe.color}>
            <ResultLabel>Resultado do seu IMC</ResultLabel>
            <ResultValue>{resultado.imc.toFixed(1)}</ResultValue>
            <ResultClass>{resultado.classe.label}</ResultClass>

            <GaugeBar>
              <GaugeFill $percent={gaugePercent(resultado.imc)} $color={resultado.classe.color} />
            </GaugeBar>
            <GaugeLabels>
              <GaugeLabel>Magreza</GaugeLabel>
              <GaugeLabel>Normal</GaugeLabel>
              <GaugeLabel>Sobrepeso</GaugeLabel>
              <GaugeLabel>Obesidade</GaugeLabel>
            </GaugeLabels>

            <Button variant="ghost" size="sm" style={{ alignSelf: 'flex-end', marginTop: '0.5rem' }}>
              <Save size={14} /> Salvar resultado
            </Button>
          </ResultCard>
        )}

        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th colSpan={3}>Veja a interpretação do IMC</Th>
              </tr>
              <tr>
                <Th>IMC</Th>
                <Th>Classificação</Th>
                <Th>Grau</Th>
              </tr>
            </Thead>
            <Tbody>
              {[
                ['Menor que 18,5',    'Magreza',         '0'  ],
                ['Entre 18,5 e 24,9', 'Normal',          '0'  ],
                ['Entre 25,0 e 29,9', 'Sobrepeso',       'I'  ],
                ['Entre 30,0 e 39,9', 'Obesidade',       'II' ],
                ['Maior que 40,0',    'Obesidade Grave', 'III'],
              ].map(([imc, classe, grau]) => (
                <Tr
                  key={imc}
                  $highlight={resultado?.classe.label === classe}
                >
                  <Td>{imc}</Td>
                  <Td>{classe}</Td>
                  <Td>{grau}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableWrapper>
      </LeftPanel>

      <RightPanel>
        <RightImage src={balanca} alt="Balança" />
      </RightPanel>
    </Wrapper>
  )
}
