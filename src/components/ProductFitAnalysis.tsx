import { Icon } from './Icon'

export function ProductFitAnalysis() {
  return (
    <section className="fit-analysis">
      <div className="fit-heading"><div><Icon name="sparkles" size={17} /><strong>Penilaian Kesesuaian</strong></div><span>98% Pas Sempurna</span></div>
      <div className="fit-rows">
        <div><span>◒ &nbsp; Bahu</span><b>Ideal (Jatuh bahu pas)</b></div>
        <div><span>▰ &nbsp; Kelonggaran Dada</span><b>Nyaman (+4,2 cm kelonggaran)</b></div>
        <div><span>▯ &nbsp; Panjang</span><b>Proporsional untuk tinggi Anda</b></div>
      </div>
    </section>
  )
}
