import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import colors from "../config/colors";
export const TermsOfService = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.paragraph}>
        <Text style={styles.title}>Termos de Serviços</Text>
        <Text style={[styles.desc, { textAlign: "center" }]}>
          Ultima atualização 15 de out.de 2021
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>Acordo com os Termos</Text>
        <Text style={styles.desc}>
          Ao usar nossos Serviços, você concorda em ficar vinculado a estes
          Termos.Se você não concordar com estes Termos, não use os Serviços.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}> Política de Privacidade</Text>
        <Text style={styles.desc}>
          Consulte nossa Política de Privacidade para obter informações sobre
          como coletamos, usamos e Viewulgamos informações de nossos
          usuários.Você reconhece e concorda que o uso dos Serviços está sujeito
          à nossa Política de Privacidade.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>Alterações dos Termos de Serviços</Text>
        <Text style={styles.desc}>
          Podemos alterar estes Termos a qualquer momento, a nosso critério.Se o
          fizermos, lhe informaremos através de publicação dos Termos
          atualizados no Site ou através de outras comunicações.É importante que
          você reveja os Termos sempre que nós os modificarmos, porque, se
          continuar a usar os Serviços depois de publicarmos os Termos alterados
          no Site, você estará indicando que concorda em ficar vinculado aos
          Termos alterados.Se você não concorda com os Termos alterados, não
          poderá mais usar os Serviços.Como nossos Serviços estão evoluindo ao
          longo do tempo, podemos alterar ou descontinuar todos ou parte dos
          Serviços, a qualquer momento e sem aviso prévio, a nosso critério.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>
          Aviso de Arbitragem Quem pode usar os serviços Eligibilidade Registros
          e Suas Informações
        </Text>
        <Text style={styles.desc}>
          É importante que você nos forneça informações precisas, completase
          atualizadas para sua conta e concorde em atualizar essas informações,
          conforme necessário, para mantê-las precisas, completas e
          atualizadas.Caso contrário, talvez seja necessário suspender ou
          encerrar sua conta.Você concorda em não Viewulgar a senha da sua conta
          a ninguém e nos notificará imediatamente sobre qualquer uso não
          autorizado da sua conta.Você é responsável por todas as atividades que
          ocorrem na sua conta, independentemente de saber ou não.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>Uso dos Serviços</Text>
        <Text style={styles.desc}>
          Você entende e concorda que nem todas as atividades descritas nos
          Serviços ou Produtos são adequadas para todos.Não use os Serviços
          enquanto estiver dirigindo, operando máquinas pesadas ou executando
          outras tarefas que exijam atenção e concentração.Você entende e
          concorda que é o único responsável pelo uso dos Serviços.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.title}>Compras </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}> Título, Risco de Perda</Text>
        <Text style={styles.desc}>
          O risco de perda e título dos Produtos/Serviços comprados por você
          passa da Gifting You para você no envio da instalação da Gifting
          You.Todos os envios são regidos de acordo com os Termos de Envio
          padrão da Gifting You
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}> Título, Risco de Perda</Text>
        <Text style={styles.desc}>
          O risco de perda e título dos Produtos/Serviços comprados por você
          passa da Gifting You para você no envio da instalação da Gifting
          You.Todos os envios são regidos de acordo com os Termos de Envio
          padrão da Gifting You
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}> Política de Devolução</Text>
        <Text style={styles.desc}>
          Se, por qualquer motivo, você não estiver satisfeito com o Produto
          adquirido e quiser devolvê-lo, consulte nossa Política de Devolução
          para obter informações sobre como devolver Produtos elegíveis.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>
          Renovação Automática até Você Cancelar e Como Cancelar Sua Assinatura
        </Text>
        <Text style={styles.desc}>
          Todos os valores são pagáveis e cobrados: (i) pela compra única (por
          exemplo, Assinatura vitalícia), no momento em que você faz o pedido; e
          (ii) pelas assinaturas mensais ou anuais, no início da assinatura e,
          depois cada uma dessas assinaturas é renovada automaticamente por um
          período adicional igual ao prazo de validade expirado até que você a
          cancele, no momento de cada renovação até que você cancele, usando as
          informações de pagamento que você forneceu.Você deve cancelar sua
          assinatura mensal ou anual antes de renovar para evitar o faturamento
          das taxas para o próximo período de assinatura.Se você comprar sua
          assinatura pelo site, poderá cancelar a renovação de sua assinatura a
          qualquer momento entrando em contato conosco pelo e-mail support
          @giftingyou.co.Se você adquirir sua assinatura por meio de um provedor
          de aplicativos, poderá cancelar a renovação de sua assinatura a
          qualquer momento com o provedor de aplicativos.Você não receberá
          reembolso pelas taxas já pagas pelo período atual de assinatura e
          continuará recebendo os Serviços encomendados até o final do período
          atual de assinatura.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>
          Alterações nos Termos de Preço para Assinaturas
        </Text>
        <Text style={styles.subheading}>Funcionalidade Futura </Text>
        <Text style={styles.desc}>
          Você concorda que suas compras não dependem da entrega de nenhuma
          funcionalidade ou recurso futuro, nem dependem de comentários públicos
          orais ou por escrito feitos pela Gifting You sobre funcionalidade ou
          recursos futuros.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>Taxas</Text>
        <Text style={styles.desc}>
          Se você tiver alguma dúvida ou objeção a respeito de cobranças,
          concorda em levantá-las conosco primeiro e concorda em não cancelar ou
          rejeitar qualquer cobrança de processamento de pagamento por cartão de
          crédito ou de terceiros, a menos que tenha feito uma tentativa
          razoável de resolver o problema diretamente com a Gifting You.A
          Gifting You se reserva o direito de não processar ou cancelar seu
          pedido em determinadas circunstâncias, por exemplo, se o seu cartão de
          crédito for recusado, se suspeitarmos que a solicitação ou o pedido
          for fraudulento, ou em outras circunstâncias que a Gifting You
          considerar apropriado a seu exclusivo critério. A Gifting You também
          se reserva o direito, a seu exclusivo critério, de tomar medidas para
          verificar sua identidade em conexão com seu pedido.Pode ser necessário
          fornecer informações adicionais para verificar sua identidade antes de
          concluir sua transação (essas informações estão incluídas na definição
          de Informações de pagamento).A Gifting You não cobrará nem reembolsará
          as cobranças de pedidos que não processamos ou cancelamos.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>Feedback</Text>
        <Text style={styles.subheading}>Conteúdo e Direitos de Conteúdo</Text>
        <Text style={styles.subheading}>Propriedade do Conteúdo</Text>
        <Text style={styles.desc}>
          A Gifting You não reivindica nenhum direito de propriedade sobre o
          Conteúdo do Usuário e nada nestes Termos será considerado como
          restringindo quaisquer direitos que você possa ter para usar e
          explorar o Conteúdo do Usuário.Sujeito ao exposto, a Gifting You e
          seus licenciadores detêm exclusivamente todos os direitos, títulos e
          interesses dos Serviços e Conteúdo, incluindo todos os direitos de
          propriedade intelectual associados.Você reconhece que os Serviços e o
          Conteúdo estão protegidos por direitos autorais, marca registrada e
          outras leis de Portugal e de outros países.Você concorda em não
          remover, alterar ou ocultar qualquer direito autoral, marca
          registrada, marca de serviço ou outros avisos de direitos de
          propriedade incorporados ou que acompanhem os Serviços ou o Conteúdo.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>
          Direitos no Conteúdo do Usuário Concedido por Você
        </Text>
        <Text style={styles.desc}>
          Ao disponibilizar qualquer Conteúdo do Usuário através dos Serviços,
          você concede à Gifting You uma licença não exclusiva, transferível,
          sublicenciável, global e sem royalties para usar, copiar, modificar,
          criar trabalhos derivados com base nele, distribuir, exibir
          publicamente, executar e distribuir publicamente seu Conteúdo do
          Usuário em conexão com a operação e fornecimento dos Serviços e
          Conteúdo para você e para outros usuários.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>
          Direitos no Conteúdo Concedido pela Gifting You
        </Text>
        <Text style={styles.desc}>
          Sujeita à sua conformidade com estes Termos, a Gifting You concede a
          você uma licença limitada, não exclusiva, intransferível e
          sublicenciável para baixar, visualizar, copiar e exibir o Conteúdo
          apenas com relação ao uso permitido dos Serviços e apenas para uso
          pessoal e para fins não comerciais.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>
          Direitos e Termos para Aplicativoso
        </Text>
        <Text style={styles.subheading}>
          Direitos Concedidos pela Gifting You no Aplicativo
        </Text>
        <Text style={styles.desc}>
          Sujeito à sua conformidade com estes Termos, a Gifting You concede a
          você uma licença limitada, não exclusiva, intransferível e
          sublicenciável para baixar e instalar uma cópia do Aplicativo em um
          dispositivo móvel ou computador que você possui ou controla e para
          executar essa cópia do Aplicativo apenas para fins pessoais e não
          comerciais.A Gifting You reserva todos os direitos sobre o aplicativo
          não concedidos expressamente a você sob estes Termos.Você não pode
          copiar o aplicativo, exceto para fazer um número razoável de cópias
          para fins de backup ou arquivamento. Exceto quando expressamente
          permitido nestes Termos, você não pode: (i) copiar, modificar ou criar
          trabalhos derivados com base no Aplicativo; (ii) distribuir,
          transferir, sublicenciar, arrendar, emprestar ou alugar o Aplicativo a
          terceiros; (iii) fazer engenharia reversa, descompilar ou desmontar o
          aplicativo; ou (iv) disponibilizar a funcionalidade do aplicativo para
          vários usuários por qualquer meio.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>
          Termos Adicionais para Aplicativos da App Store
        </Text>
        <Text style={styles.desc}>
          Se você acessou ou baixou o aplicativo de um fornecedor de
          aplicativos, reconhece e concorda que:
        </Text>
        <Text style={styles.subheading}> Proibições</Text>
        <Text style={styles.desc}>
          Você concorda em não fazer:
          <Text style={styles.li}>
            <Text style={styles.li}>
              Publicar, fazer upload, submeter, enviar ou transmitir qualquer
              Conteúdo que: (i) infrinja, sonegue ou viole patentes, direitos
              autorais, marca registrada, segredo comercial, direitos morais ou
              outros direitos de propriedade intelectual de terceiros, ou
              direitos de publicidade ou privacidade de terceiros; (ii) viole ou
              incentive qualquer conduta que viole qualquer lei ou regulamento
              aplicável ou que dê origem a responsabilidade civil;(iii) for
              fraudulento, falso, enganoso ou ilusório; (iv) é difamatório,
              obsceno, pornográfico, vulgar ou ofensivo; (v) promova
              discriminação, intolerância, racismo, ódio, assédio ou dano contra
              qualquer inViewíduo ou grupo; (vi) seja violento ou ameaçador ou
              promova violência ou ações que ameacem qualquer pessoa ou
              entidade; ou (vii) promova atividades ou substâncias ilegais ou
              prejudiciais;
            </Text>
            <Text style={styles.li}>
              Use, exiba, espelhe ou enquadre os Serviços, ou qualquer elemento
              inViewidual dos Serviços, nome da Gifting You, marca registrada da
              Gifting You, logotipo ou outras informações de propriedade, ou o
              layout e design de qualquer página ou formulário contido em uma
              página, sem a permissão expressa e por escrito da Gifting You;
            </Text>
            <Text style={styles.li}>
              Acessar, adulterar ou usar áreas não públicas dos Serviços,
              sistemas de computador da Gifting You ou sistemas de entrega
              técnico dos fornecedores da Gifting You;
            </Text>
            <Text style={styles.li}>
              Tente investigar, verificar ou testar a vulnerabilidade de
              qualquer sistema ou rede Gifting You ou viole quaisquer medidas de
              segurança ou autenticação;
            </Text>
            <Text style={styles.li}>
              Evitar, ignorar, remover, desativar, prejudicar, descodificar ou
              contornar qualquer medida tecnológica implementada pela Gifting
              You ou por qualquer um dos fornecedores da Gifting You ou por
              qualquer outro terceiro (incluindo outro usuário) para proteger os
              Serviços;
            </Text>
            <Text style={styles.li}>
              Tentativa de acessar ou pesquisar os Serviços ou fazer download de
              Conteúdo Coletivo dos Serviços através do uso de qualquer
              mecanismo, software, ferramenta, agente, dispositivo ou mecanismo
              (incluindo aranhas de rede, robôs de rede, rastreadores,
              ferramentas de mineração de dados ou similares) que não o software
              e/ou agentes de pesquisa fornecidos pela Gifting You ou outros
              navegadores da web geralmente disponíveis de terceiros;
            </Text>
            <Text style={styles.li}>
              Envie qualquer publicidade não solicitada ou não autorizada,
              materiais promocionais, e-mail, lixo eletrônico, spam, correntes
              ou outra forma de solicitação;
            </Text>
            <Text style={styles.li}>
              Use metatags ou outros textos ou metadados ocultos que utilizem
              uma marca registrada Gifting You, URL do logotipo ou nome do
              produto sem o consentimento expresso e por escrito da Gifting You;
            </Text>
            <Text style={styles.li}>
              Usar os Serviços para qualquer finalidade comercial ou o benefício
              de terceiros ou de qualquer maneira não permitida por estes
              Termos;
            </Text>
            <Text style={styles.li}>
              Forjar qualquer cabeçalho de pacote TCP/IP ou qualquer parte das
              informações do cabeçalho em qualquer publicação de e-mail ou grupo
              de notícias ou de qualquer forma usar os Serviços para enviar
              informações de identificação de origem alteradas, enganosas ou
              falsas
            </Text>
            <Text style={styles.li}>
              Tentativa de decifrar, descompilar, desmontar ou fazer engenharia
              reversa de qualquer software usado para fornecer os Serviços;
            </Text>
            <Text style={styles.li}>
              Interferir ou tentar interferir com o acesso de qualquer usuário,
              host ou rede, incluindo, sem limitação, envio de vírus,
              sobrecarga, abundancia, envio de spam ou envio de bomba por
              correio aos Serviços;
            </Text>
            <Text style={styles.li}>
              Coletar ou armazenar qualquer informação de identificação pessoal
              dos Serviços de outros usuários dos Serviços sem sua permissão
              expressa;
            </Text>
            <Text style={styles.li}>
              Representar ou deturpar sua afiliação com qualquer pessoa ou
              entidade;
            </Text>
            <Text style={styles.li}>
              Violar qualquer lei ou regulamento aplicável; ou
            </Text>
            <Text style={styles.li}>
              Incentive ou permita que qualquer outra pessoa faça o que precede.
            </Text>
          </Text>
          Embora não sejamos obrigados a monitorar o acesso ou o uso dos
          Serviços ou Conteúdo ou revisar ou editar qualquer Conteúdo, temos o
          direito de fazê-lo com a finalidade de operar os Serviços, garantir a
          conformidade com estes Termos e cumprir com a lei aplicável ou outros
          requisitos legais.Reservamo-nos o direito, mas não somos obrigados, de
          remover ou desativar o acesso a qualquer Conteúdo, a qualquer momento
          e sem aviso prévio, incluindo, entre outros, se considerarmos que
          qualquer Conteúdo esteja censurando ou violando estes Termos.Temos o
          direito de investigar violações destes Termos ou conduta que afeta os
          Serviços.Também podemos consultar e cooperar com as autoridades
          policiais para processar usuários que violam a lei.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>
          Links para Sites ou Recursos de Terceiros
        </Text>
        <Text style={styles.desc}>
          Os serviços e aplicativos podem conter links para sites ou recursos de
          terceiros. Fornecemos esses links apenas como uma conveniência e não
          somos responsáveis pelo conteúdo, produtos ou serviços contidos ou
          disponíveis nesses sites, recursos ou links exibidos nesses sites.Você
          reconhece a responsabilidade exclusiva e assume todos os riscos
          decorrentes do uso de sites ou recursos de terceiros.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>Encerramento</Text>
        <Text style={styles.desc}>
          Podemos encerrar seu acesso e uso dos Serviços, a nosso critério, a
          qualquer momento sem aviso prévio.Você pode cancelar sua conta a
          qualquer momento enviando um e-mail para support @giftingyou.co.Se
          você adquirir uma assinatura por meio de um provedor de aplicativos,
          também deverá cancelar sua assinatura diretamente com o fornecedor de
          aplicativos.Em caso de rescisão, descontinuação ou cancelamento dos
          Serviços ou da sua Conta, todas as disposições destes Termos que, por
          natureza, devem sobreviver, incluindo, sem limitação, disposições de
          propriedade, isenções de garantia, limitações de responsabilidade e
          disposições de resolução de disputas.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}> Isenções de Garantia</Text>
        <Text style={styles.desc}>
          Não garantimos que os Serviços ou Produtos atendam aos seus requisitos
          ou estejam disponíveis de forma ininterrupta, segura ou sem erros.Não
          garantimos a qualidade, precisão, pontualidade, veracidade,
          integridade ou confiabilidade de qualquer Conteúdo.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>Indenização </Text>
        <Text style={styles.desc}>
          Você indenizará e manterá a Gifting You inofensiva e seus executivos,
          diretores, funcionários e agentes, de e contra quaisquer reclamações,
          disputas, demandas, responsabilidades, danos, perdas, custos e
          despesas, incluindo, sem limitação, honorários advocatícios e
          contábeis razoáveis, decorrentes de ou de alguma forma relacionado com
          (i) seu acesso ou uso dos Serviços ou Conteúdo; ou (ii) sua violação
          destes Termos.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={[styles.subheading, { fontSize: 20 }]}>
          Limite de Responsabilidade
        </Text>
        <Text
          style={[
            styles.paragraph,
            { fontSize: 16, fontWeight: "600", marginHorizontal: 10 },
          ]}
        >
          Nem a Gifting You nem nenhuma outra parte envolvida na criação,
          produção ou entrega dos Serviços, Produtos ou Conteúdo serão
          responsáveis por quaisquer danos incidentais, especiais, exemplares ou
          consequenciais, incluindo, entre outros, perda de lucros, perda de
          dados ou cortesia, interrupção do serviço, dano ao computador ou falha
          do sistema ou o custo de Serviços ou Produtos substitutos decorrentes
          ou relacionados a estes termos ou pelo uso ou incapacidade de usar os
          Serviços, Produtos ou Conteúdo, com base na garantia, contrato, delito
          (incluindo negligência), responsabilidade do produto ou qualquer outra
          teoria jurídica, e se a Gifting You foi ou não informada da
          possibilidade de tal dano, mesmo que se considere que um remédio
          limitado estabelecido neste documento falhou em seu objetivo
          essencial.Algumas jurisdições não permitem a exclusão ou limitação de
          responsabilidade por danos consequentes ou incidentais; portanto, a
          limitação acima pode não se aplicar a você.Em nenhuma hipótese a
          responsabilidade total da Gifting You decorrente ou relacionada a
          esses termos ou pelo uso ou incapacidade de usar os Serviços, Produtos
          ou Conteúdo excederá os valores que você pagou à Gifting You pelo uso
          dos Serviços, Produtos ou Conteúdo ou cinquenta euros (EUR 50,00), se
          você não tiver nenhuma obrigação de pagamento com a Gifting You,
          conforme aplicável.A exclusão e as limitações dos danos estabelecidos
          acima são elementos fundamentais da base do acordo entre a Gifting You
          e você.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>Resolução de disputas </Text>
        <Text style={styles.subheading}>Lei Aplicável </Text>
        <Text style={styles.desc}>
          Estes Termos e qualquer ação relacionada a eles serão regidos pelas
          leis do Estado de Portugal, independentemente do conflito de
          disposições legais.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>Acordo de arbitragem </Text>
        <Text style={styles.subheading}>Regras de Arbitragem</Text>
        <Text style={styles.subheading}> Processo de Arbitragem</Text>
        <Text style={styles.desc}>
          Uma parte que deseja iniciar a arbitragem deve fornecer à outra parte
          uma demanda por arbitragem por escrito, conforme especificado nas
          regras estabelecidas para o efeito.O árbitro será um juiz aposentado
          ou um advogado licenciado para exercer a advocacia e será selecionado
          pelas partes da lista de árbitros.Se as partes não conseguirem chegar
          a um acordo sobre um árbitro dentro de 7 (sete) dias após a entrega da
          Demanda por Arbitragem, será a entidade respetiva que indicará o
          árbitro de acordo com as regras e lei em vigor
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>Condições Gerais</Text>
        <Text style={styles.desc}>
          Você não pode atribuir ou transferir estes Termos, por força de lei ou
          de outra forma, sem o consentimento prévio por escrito da Gifting
          You.Qualquer tentativa sua de atribuir ou transferir estes Termos, sem
          esse consentimento, será nula e sem efeito.A Gifting You pode atribuir
          ou transferir livremente estes Termos sem restrição.Sujeito ao acima
          exposto, estes Termos vincularão e permanecerão em benefício das
          partes, seus sucessores e cessionários permitidos.Quaisquer
          notificações ou outras comunicações fornecidas pela Gifting You sob
          estes Termos, incluindo aquelas relacionadas a modificações nestes
          Termos, serão dadas: (i) pela Gifting You por e-mail; ou (ii) postando
          nos Serviços.Para avisos feitos por e-mail, a data do recebimento será
          considerada a data em que o aviso for transmitido.A falha da Gifting
          You em fazer cumprir qualquer direito ou disposição destes Termos não
          será considerada uma renúncia a esse direito ou disposição.A renúncia
          a qualquer direito ou disposição será efetiva somente se por escrito e
          assinada por um representante devidamente autorizado da Gifting
          You.Exceto conforme expressamente estabelecido nestes Termos, o
          exercício por qualquer uma das partes de seus recursos sob estes
          Termos não prejudicará seus outros recursos sob esses Termos ou de
          outra forma.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>Contato</Text>
        <Text style={styles.desc}>
          Se você tiver alguma dúvida sobre estes Termos ou Serviços ou
          Produtos, entre em contato com a Gifting You em feedback
          @giftingyou.co.
        </Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.subheading}>
          Brasil: Termos de Serviço Adicionais
        </Text>
        <Text style={styles.desc}>
          Para os usuários no Brasil: por favor note que: A Gifting You se
          esforçará para notificá-lo razoavelmente com antecedência sobre
          quaisquer modificações ou atualizações dos Serviços e alterações de
          preços.Com relação às assinaturas, a Gifting You se esforçará para
          utilizar as plataformas de cobrança relevantes para notificá-lo sobre
          alterações de preços, se essas ferramentas de notificação estiverem
          disponíveis nas plataformas aplicáveis.As notificações podem ser
          entregues através dos Serviços ou por e-mail, desde que você tenha
          consentido em receber e-mails da Gifting You.Você deve ter 18 anos ou
          mais para usar os Serviços, no entanto, inViewíduos entre 16 e 18 anos
          podem assumir obrigações, desde que sejam acompanhados por seus
          responsáveis legais (ou seja, pais ou guardiões).InViewíduos com menos
          de 16 anos de idade não podem assumir obrigações e devem sempre ser
          representados por seu responsável legal na prática de quaisquer
          atos.Nos casos em que você violou os Termos, a Gifting You se
          esforçará para notificá-lo sobre a violação e você terá 5 dias para
          remediar a violação.Se você não remediar a violação ou não for
          possível remediá-la no julgamento razoável da Gifting You, a Gifting
          You encerrará sua conta e cancelará sua licença.Nos demais casos
          podemos encerrar seu acesso e uso dos Serviços, a nosso critério, a
          qualquer momento mediante aviso prévio com antecedência razoável.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.lightgreen,
    color: colors.green,
    paddingTop: 10,
    textAlign: "justify",
  },
  paragraph: {
    marginBottom: 4,
    // flex: 1,
    flexDirection: "column",
    color: colors.green,

    textAlign: "justify",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    color: colors.green,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.green,
    marginVertical: 5,
    textAlign: "justify",
  },
  desc: {
    marginTop: 0,
    fontSize: 16,
    marginHorizontal: 10,
    color: colors.green,

    textAlign: "justify",
  },
  li: {
    marginVertical: 10,
    fontSize: 16,
    marginHorizontal: 10,
    color: colors.green,

    textAlign: "justify",
  },
});
