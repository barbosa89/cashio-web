export const locales = ['es', 'en', 'pt'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';
export const localeStorageKey = 'cashio:locale';

export const languageLabels: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
};

export type RichTextPart =
  | string
  | {
      label: string;
      href: string;
    };

export type RichText = readonly RichTextPart[];

export interface LegalSection {
  title: string;
  paragraphs: readonly RichText[];
}

export interface LegalContent {
  heading: string;
  label: string;
  effective: string;
  introduction?: RichText;
  sections: readonly LegalSection[];
}

export interface LandingContent {
  meta: {
    title: string;
    description: string;
  };
  accessibility: {
    skipToContent: string;
    brandHome: string;
    openNavigation: string;
    closeNavigation: string;
    primaryNavigation: string;
    languageSelector: string;
    heroImage: string;
    playStore: string;
    footerNavigation: string;
  };
  nav: {
    home: string;
    download: string;
    features: string;
    privacy: string;
    terms: string;
  };
  hero: {
    title: string;
    lead: string;
    primaryAction: string;
    secondaryAction: string;
  };
  download: {
    availability: string;
    title: string;
    description: string;
    storeCaption: string;
    storeName: string;
  };
  features: {
    title: string;
    description: string;
    items: readonly {
      title: string;
      description: string;
    }[];
  };
  privacy: LegalContent;
  terms: LegalContent;
  footer: {
    statement: string;
    description: string;
  };
}

const websiteLink = {
  label: 'omarbarbosa.com',
  href: 'https://omarbarbosa.com',
} as const;

export const content = {
  es: {
    meta: {
      title: 'Cash IO | Finanzas personales offline',
      description:
        'Cash IO es una app offline-first para registrar ingresos, egresos, cuentas, presupuestos, categorías, tags, saldos, gráficas y reportes desde una base de datos local.',
    },
    accessibility: {
      skipToContent: 'Ir al contenido principal',
      brandHome: 'Ir al inicio',
      openNavigation: 'Abrir navegación',
      closeNavigation: 'Cerrar navegación',
      primaryNavigation: 'Navegación principal',
      languageSelector: 'Seleccionar idioma',
      heroImage:
        'Cinco vistas de Cash IO con movimientos, balances, presupuestos y reportes',
      playStore: 'Ir a Cash IO en Play Store',
      footerNavigation: 'Enlaces del pie de página',
    },
    nav: {
      home: 'Inicio',
      download: 'Descarga',
      features: 'Características',
      privacy: 'Privacidad',
      terms: 'Términos',
    },
    hero: {
      title: 'Tu dinero. Tus datos. Siempre contigo.',
      lead:
        'Cash IO te ayuda a registrar ingresos y egresos, administrar cuentas, planear presupuestos, revisar saldos mensuales, ver gráficas y exportar reportes CSV desde una base de datos local.',
      primaryAction: 'Descargar Android',
      secondaryAction: 'Explorar funciones',
    },
    download: {
      availability: 'Disponible para Android',
      title: 'Instala Cash IO desde Play Store.',
      description:
        'El enlace oficial se conectará cuando la ficha pública esté lista. Por ahora queda como ancla para integrarlo sin cambiar la estructura.',
      storeCaption: 'Disponible en',
      storeName: 'Google Play',
    },
    features: {
      title:
        'Herramientas claras para registrar, entender y exportar tus movimientos.',
      description:
        'Lo esencial para organizar tu mes, sin enviar tus registros financieros a un servidor externo.',
      items: [
        {
          title: 'Ingresos y egresos',
          description:
            'Registra montos, fechas, descripciones y tipo de movimiento con una interfaz rápida.',
        },
        {
          title: 'Categorías y tags',
          description:
            'Clasifica cada registro con una categoría y varios tags para encontrar patrones.',
        },
        {
          title: 'Cuentas y traslados',
          description:
            'Crea cuentas adicionales a la cuenta por defecto y mueve montos entre ellas.',
        },
        {
          title: 'Balance por cuenta',
          description:
            'Visualiza ingresos, egresos y estado general de cada cuenta en un solo lugar.',
        },
        {
          title: 'Presupuesto mensual',
          description:
            'Define presupuestos por categoría, agrega o quita categorías y cópialos mes a mes de forma manual o automática.',
        },
        {
          title: 'Filtros mensuales',
          description:
            'Busca por descripción y filtra por categoría o tag dentro del mes visible.',
        },
        {
          title: 'Gráficas de gastos',
          description:
            'Revisa saldos diarios y egresos por categoría para entender cómo se mueve tu dinero.',
        },
        {
          title: 'Reportes exportables',
          description:
            'Genera archivos CSV por rango mensual para análisis, respaldo o conciliación.',
        },
        {
          title: 'Saldo acumulado y respaldo',
          description:
            'Activa saldos históricos y copias opcionales en Google Drive o iCloud en builds nativas.',
        },
      ],
    },
    privacy: {
      heading: 'Tus datos financieros se quedan en tu dispositivo.',
      label: 'Política de privacidad',
      effective: 'Vigente desde el 25 de junio de 2026.',
      introduction: [
        'Cash IO es desarrollada por Omar Barbosa. Para consultas sobre esta política puedes usar el sitio ',
        websiteLink,
        '.',
      ],
      sections: [
        {
          title: 'Datos que maneja la app',
          paragraphs: [
            [
              'Cash IO guarda localmente la información que registras dentro de la app, incluyendo movimientos, montos, fechas, descripciones, categorías, tags, saldos mensuales y preferencias. Estos datos pueden incluir información financiera, pero se almacenan en una base de datos SQLite local en tu dispositivo.',
            ],
          ],
        },
        {
          title: 'Recolección, uso y terceros',
          paragraphs: [
            [
              'Cash IO no vende datos personales, no opera un servidor propio para recibir tus datos financieros y no usa tus registros para publicidad o analítica. La app usa los datos que ingresas sólo para mostrar saldos, filtros, gráficas, reportes y las funciones propias de administración financiera.',
            ],
          ],
        },
        {
          title: 'Copias de seguridad opcionales',
          paragraphs: [
            [
              'Si activas la copia de seguridad, Cash IO puede guardar una copia de la base de datos en Google Drive en Android o iCloud en iOS. Esta función es opcional, depende de la cuenta del usuario y se usa únicamente para respaldar o restaurar la información.',
            ],
          ],
        },
        {
          title: 'Retención y eliminación',
          paragraphs: [
            [
              'Los datos permanecen en tu dispositivo hasta que los elimines desde la app, borres los datos de la aplicación o desinstales Cash IO. Las copias creadas en Google Drive o iCloud permanecen bajo la cuenta del usuario y pueden administrarse desde esos servicios.',
            ],
          ],
        },
        {
          title: 'Seguridad',
          paragraphs: [
            [
              'La base de datos se almacena localmente en el espacio de la app. Cuando se usa una copia de seguridad opcional, la transferencia y el almacenamiento dependen de los mecanismos de seguridad de Google Drive o iCloud.',
            ],
          ],
        },
      ],
    },
    terms: {
      heading:
        'Cash IO se ofrece como herramienta de apoyo, no como asesoría profesional.',
      label: 'Términos de uso',
      effective: 'Vigente desde el 26 de junio de 2026.',
      sections: [
        {
          title: 'Aceptación',
          paragraphs: [
            [
              'Al usar Cash IO aceptas estos términos. Si no estás de acuerdo, no uses la aplicación. Cash IO puede actualizar estos términos cuando sea necesario; la versión publicada en esta página será la referencia vigente.',
            ],
          ],
        },
        {
          title: 'Uso bajo responsabilidad del usuario',
          paragraphs: [
            [
              'Cash IO ayuda a registrar y visualizar información financiera personal, pero no reemplaza asesoría contable, financiera, legal o tributaria. Las decisiones tomadas con base en los datos, reportes o saldos de la app son responsabilidad exclusiva del usuario.',
            ],
          ],
        },
        {
          title: 'Sin garantías',
          paragraphs: [
            [
              'La app se entrega tal como está y según disponibilidad. Aunque se busca que funcione correctamente, Cash IO no garantiza ausencia de errores, disponibilidad permanente, exactitud absoluta de cálculos, compatibilidad con todos los dispositivos ni conservación indefinida de datos.',
            ],
          ],
        },
        {
          title: 'Datos, respaldos y pérdida de información',
          paragraphs: [
            [
              'El usuario es responsable de revisar sus registros, mantener copias de seguridad cuando lo considere necesario y verificar restauraciones. Cash IO no será responsable por pérdida de datos, errores de captura, respaldos no realizados, fallas del dispositivo o cambios en servicios de terceros como Google Drive o iCloud.',
            ],
          ],
        },
        {
          title: 'Limitación de responsabilidad',
          paragraphs: [
            [
              'En la máxima medida permitida por la ley aplicable, Omar Barbosa y Cash IO no serán responsables por daños directos, indirectos, incidentales, especiales, consecuenciales, pérdida de dinero, pérdida de datos, lucro cesante o cualquier perjuicio derivado del uso o imposibilidad de uso de la app, incluso si se informó la posibilidad de dichos daños.',
            ],
          ],
        },
        {
          title: 'Uso permitido',
          paragraphs: [
            [
              'No debes usar Cash IO para actividades ilegales, para vulnerar derechos de terceros, para intentar afectar la seguridad de la app o para manipular servicios externos conectados a funciones opcionales de respaldo.',
            ],
          ],
        },
        {
          title: 'Contacto',
          paragraphs: [
            [
              'Para preguntas sobre estos términos, usa ',
              websiteLink,
              '.',
            ],
          ],
        },
      ],
    },
    footer: {
      statement: 'El control de tu dinero no necesita una nube.',
      description: 'Cash IO · Finanzas personales locales y simples.',
    },
  },
  en: {
    meta: {
      title: 'Cash IO | Offline personal finance',
      description:
        'Cash IO is an offline-first app for tracking income, expenses, accounts, budgets, categories, tags, balances, charts, and reports from a local database.',
    },
    accessibility: {
      skipToContent: 'Skip to main content',
      brandHome: 'Go to the home section',
      openNavigation: 'Open navigation',
      closeNavigation: 'Close navigation',
      primaryNavigation: 'Primary navigation',
      languageSelector: 'Select language',
      heroImage:
        'Five Cash IO screens showing transactions, balances, budgets, and reports',
      playStore: 'Open Cash IO on the Play Store',
      footerNavigation: 'Footer links',
    },
    nav: {
      home: 'Home',
      download: 'Download',
      features: 'Features',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    hero: {
      title: 'Your money. Your data. Always with you.',
      lead:
        'Cash IO helps you track income and expenses, manage accounts, plan budgets, review monthly balances, explore charts, and export CSV reports from a local database.',
      primaryAction: 'Download for Android',
      secondaryAction: 'Explore features',
    },
    download: {
      availability: 'Available for Android',
      title: 'Install Cash IO from the Play Store.',
      description:
        'The official link will be connected when the public store listing is ready. For now, this remains the integration point without changing the page structure.',
      storeCaption: 'Get it on',
      storeName: 'Google Play',
    },
    features: {
      title: 'Clear tools to record, understand, and export your transactions.',
      description:
        'Everything you need to organize your month without sending your financial records to an external server.',
      items: [
        {
          title: 'Income and expenses',
          description:
            'Record amounts, dates, descriptions, and transaction types through a fast interface.',
        },
        {
          title: 'Categories and tags',
          description:
            'Classify every record with one category and multiple tags to uncover patterns.',
        },
        {
          title: 'Accounts and transfers',
          description:
            'Create accounts in addition to the default account and move funds between them.',
        },
        {
          title: 'Balance by account',
          description:
            'View income, expenses, and the overall status of each account in one place.',
        },
        {
          title: 'Monthly budgets',
          description:
            'Set budgets by category, add or remove categories, and copy them month to month manually or automatically.',
        },
        {
          title: 'Monthly filters',
          description:
            'Search by description and filter by category or tag within the selected month.',
        },
        {
          title: 'Expense charts',
          description:
            'Review daily balances and expenses by category to understand how your money moves.',
        },
        {
          title: 'Exportable reports',
          description:
            'Generate CSV files for a monthly range to analyze, back up, or reconcile your records.',
        },
        {
          title: 'Running balance and backups',
          description:
            'Enable historical balances and optional Google Drive or iCloud backups in native builds.',
        },
      ],
    },
    privacy: {
      heading: 'Your financial data stays on your device.',
      label: 'Privacy policy',
      effective: 'Effective June 25, 2026.',
      introduction: [
        'Cash IO is developed by Omar Barbosa. For questions about this policy, visit ',
        websiteLink,
        '.',
      ],
      sections: [
        {
          title: 'Data handled by the app',
          paragraphs: [
            [
              'Cash IO stores the information you enter locally within the app, including transactions, amounts, dates, descriptions, categories, tags, monthly balances, and preferences. This data may include financial information, but it is stored in a local SQLite database on your device.',
            ],
          ],
        },
        {
          title: 'Collection, use, and third parties',
          paragraphs: [
            [
              'Cash IO does not sell personal data, does not operate its own server to receive your financial information, and does not use your records for advertising or analytics. The app uses the data you enter only to display balances, filters, charts, reports, and its personal finance management features.',
            ],
          ],
        },
        {
          title: 'Optional backups',
          paragraphs: [
            [
              'If you enable backups, Cash IO may save a copy of the database to Google Drive on Android or iCloud on iOS. This feature is optional, depends on the user’s account, and is used only to back up or restore information.',
            ],
          ],
        },
        {
          title: 'Retention and deletion',
          paragraphs: [
            [
              'Data remains on your device until you delete it from the app, clear the application data, or uninstall Cash IO. Copies created in Google Drive or iCloud remain under the user’s account and can be managed through those services.',
            ],
          ],
        },
        {
          title: 'Security',
          paragraphs: [
            [
              'The database is stored locally within the app’s storage area. When an optional backup is used, transfer and storage rely on the security mechanisms provided by Google Drive or iCloud.',
            ],
          ],
        },
      ],
    },
    terms: {
      heading:
        'Cash IO is a supporting tool, not a source of professional advice.',
      label: 'Terms of use',
      effective: 'Effective June 26, 2026.',
      sections: [
        {
          title: 'Acceptance',
          paragraphs: [
            [
              'By using Cash IO, you accept these terms. If you do not agree, do not use the application. Cash IO may update these terms when necessary; the version published on this page will be the current reference.',
            ],
          ],
        },
        {
          title: 'Use at your own responsibility',
          paragraphs: [
            [
              'Cash IO helps record and display personal financial information, but it does not replace accounting, financial, legal, or tax advice. Decisions based on the app’s data, reports, or balances are the user’s sole responsibility.',
            ],
          ],
        },
        {
          title: 'No warranties',
          paragraphs: [
            [
              'The app is provided as is and as available. Although every effort is made to keep it working correctly, Cash IO does not guarantee freedom from errors, permanent availability, absolute accuracy of calculations, compatibility with every device, or indefinite preservation of data.',
            ],
          ],
        },
        {
          title: 'Data, backups, and information loss',
          paragraphs: [
            [
              'Users are responsible for reviewing their records, maintaining backups when appropriate, and verifying restorations. Cash IO is not responsible for data loss, entry errors, backups that were not performed, device failures, or changes to third-party services such as Google Drive or iCloud.',
            ],
          ],
        },
        {
          title: 'Limitation of liability',
          paragraphs: [
            [
              'To the fullest extent permitted by applicable law, Omar Barbosa and Cash IO will not be liable for direct, indirect, incidental, special, or consequential damages; loss of money, data, or profits; or any harm resulting from the use or inability to use the app, even if advised of the possibility of such damages.',
            ],
          ],
        },
        {
          title: 'Permitted use',
          paragraphs: [
            [
              'You must not use Cash IO for illegal activities, to violate third-party rights, to attempt to compromise the app’s security, or to manipulate external services connected to optional backup features.',
            ],
          ],
        },
        {
          title: 'Contact',
          paragraphs: [
            ['For questions about these terms, visit ', websiteLink, '.'],
          ],
        },
      ],
    },
    footer: {
      statement: 'Controlling your money does not require a cloud.',
      description: 'Cash IO · Simple, local personal finance.',
    },
  },
  pt: {
    meta: {
      title: 'Cash IO | Finanças pessoais offline',
      description:
        'Cash IO é uma app offline-first para registar receitas, despesas, contas, orçamentos, categorias, etiquetas, saldos, gráficos e relatórios numa base de dados local.',
    },
    accessibility: {
      skipToContent: 'Ir para o conteúdo principal',
      brandHome: 'Ir para o início',
      openNavigation: 'Abrir navegação',
      closeNavigation: 'Fechar navegação',
      primaryNavigation: 'Navegação principal',
      languageSelector: 'Selecionar idioma',
      heroImage:
        'Cinco ecrãs do Cash IO com movimentos, saldos, orçamentos e relatórios',
      playStore: 'Abrir Cash IO na Play Store',
      footerNavigation: 'Links do rodapé',
    },
    nav: {
      home: 'Início',
      download: 'Download',
      features: 'Funcionalidades',
      privacy: 'Privacidade',
      terms: 'Termos',
    },
    hero: {
      title: 'O seu dinheiro. Os seus dados. Sempre por perto.',
      lead:
        'Cash IO ajuda a registar receitas e despesas, gerir contas, planear orçamentos, rever saldos mensais, consultar gráficos e exportar relatórios CSV a partir de uma base de dados local.',
      primaryAction: 'Obter para Android',
      secondaryAction: 'Ver funcionalidades',
    },
    download: {
      availability: 'Disponível para Android',
      title: 'Instale Cash IO pela Play Store.',
      description:
        'O link oficial será ligado quando a página pública estiver pronta. Por enquanto, permanece como ponto de integração sem alterar a estrutura.',
      storeCaption: 'Disponível no',
      storeName: 'Google Play',
    },
    features: {
      title:
        'Ferramentas claras para registar, compreender e exportar os seus movimentos.',
      description:
        'O essencial para organizar o mês sem enviar os seus registos financeiros para um servidor externo.',
      items: [
        {
          title: 'Receitas e despesas',
          description:
            'Registe valores, datas, descrições e tipos de movimento através de uma interface rápida.',
        },
        {
          title: 'Categorias e etiquetas',
          description:
            'Classifique cada registo com uma categoria e várias etiquetas para identificar padrões.',
        },
        {
          title: 'Contas e transferências',
          description:
            'Crie contas além da conta predefinida e transfira valores entre elas.',
        },
        {
          title: 'Saldo por conta',
          description:
            'Consulte receitas, despesas e o estado geral de cada conta num só lugar.',
        },
        {
          title: 'Orçamento mensal',
          description:
            'Defina orçamentos por categoria, adicione ou remova categorias e copie-os entre meses de forma manual ou automática.',
        },
        {
          title: 'Filtros mensais',
          description:
            'Pesquise por descrição e filtre por categoria ou etiqueta dentro do mês visível.',
        },
        {
          title: 'Gráficos de despesas',
          description:
            'Reveja saldos diários e despesas por categoria para compreender como o seu dinheiro se movimenta.',
        },
        {
          title: 'Relatórios exportáveis',
          description:
            'Gere CSV por intervalo mensal para análise, cópia de segurança ou conciliação.',
        },
        {
          title: 'Saldo acumulado e cópias de segurança',
          description:
            'Ative saldos históricos e cópias opcionais no Google Drive ou iCloud nas versões nativas.',
        },
      ],
    },
    privacy: {
      heading: 'Os seus dados financeiros ficam no seu dispositivo.',
      label: 'Política de privacidade',
      effective: 'Em vigor desde 25 de junho de 2026.',
      introduction: [
        'Cash IO é desenvolvida por Omar Barbosa. Para questões sobre esta política, visite ',
        websiteLink,
        '.',
      ],
      sections: [
        {
          title: 'Dados tratados pela app',
          paragraphs: [
            [
              'Cash IO guarda localmente as informações que regista na app, incluindo movimentos, valores, datas, descrições, categorias, etiquetas, saldos mensais e preferências. Estes dados podem incluir informações financeiras, mas são armazenados numa base de dados SQLite local no seu dispositivo.',
            ],
          ],
        },
        {
          title: 'Recolha, utilização e terceiros',
          paragraphs: [
            [
              'Cash IO não vende dados pessoais, não opera um servidor próprio para receber os seus dados financeiros e não utiliza os seus registos para publicidade ou análise. A app usa os dados introduzidos apenas para apresentar saldos, filtros, gráficos, relatórios e as suas funções de gestão financeira.',
            ],
          ],
        },
        {
          title: 'Cópias de segurança opcionais',
          paragraphs: [
            [
              'Se ativar as cópias de segurança, Cash IO pode guardar uma cópia da base de dados no Google Drive em Android ou no iCloud em iOS. Esta função é opcional, depende da conta do utilizador e serve apenas para guardar ou restaurar informações.',
            ],
          ],
        },
        {
          title: 'Retenção e eliminação',
          paragraphs: [
            [
              'Os dados permanecem no seu dispositivo até serem eliminados na app, até limpar os dados da aplicação ou desinstalar Cash IO. As cópias criadas no Google Drive ou iCloud permanecem na conta do utilizador e podem ser geridas nesses serviços.',
            ],
          ],
        },
        {
          title: 'Segurança',
          paragraphs: [
            [
              'A base de dados é armazenada localmente no espaço da app. Quando é utilizada uma cópia de segurança opcional, a transferência e o armazenamento dependem dos mecanismos de segurança do Google Drive ou iCloud.',
            ],
          ],
        },
      ],
    },
    terms: {
      heading:
        'Cash IO é uma ferramenta de apoio, não uma fonte de aconselhamento profissional.',
      label: 'Termos de utilização',
      effective: 'Em vigor desde 26 de junho de 2026.',
      sections: [
        {
          title: 'Aceitação',
          paragraphs: [
            [
              'Ao utilizar Cash IO, aceita estes termos. Se não concordar, não utilize a aplicação. Cash IO pode atualizar estes termos quando necessário; a versão publicada nesta página será a referência em vigor.',
            ],
          ],
        },
        {
          title: 'Utilização sob responsabilidade do utilizador',
          paragraphs: [
            [
              'Cash IO ajuda a registar e visualizar informações financeiras pessoais, mas não substitui aconselhamento contabilístico, financeiro, jurídico ou fiscal. As decisões tomadas com base nos dados, relatórios ou saldos da app são da exclusiva responsabilidade do utilizador.',
            ],
          ],
        },
        {
          title: 'Sem garantias',
          paragraphs: [
            [
              'A app é fornecida tal como está e conforme a disponibilidade. Embora se procure assegurar o seu funcionamento correto, Cash IO não garante ausência de erros, disponibilidade permanente, exatidão absoluta dos cálculos, compatibilidade com todos os dispositivos ou conservação indefinida dos dados.',
            ],
          ],
        },
        {
          title: 'Dados, cópias de segurança e perda de informação',
          paragraphs: [
            [
              'O utilizador é responsável por rever os seus registos, manter cópias de segurança quando necessário e verificar os restauros. Cash IO não se responsabiliza por perda de dados, erros de introdução, cópias não realizadas, falhas do dispositivo ou alterações em serviços de terceiros como Google Drive ou iCloud.',
            ],
          ],
        },
        {
          title: 'Limitação de responsabilidade',
          paragraphs: [
            [
              'Na máxima medida permitida pela legislação aplicável, Omar Barbosa e Cash IO não serão responsáveis por danos diretos, indiretos, incidentais, especiais ou consequenciais; perda de dinheiro, dados ou lucros; ou qualquer prejuízo resultante da utilização ou impossibilidade de utilização da app, mesmo que tenha sido comunicada a possibilidade desses danos.',
            ],
          ],
        },
        {
          title: 'Utilização permitida',
          paragraphs: [
            [
              'Não deve utilizar Cash IO para atividades ilegais, para violar direitos de terceiros, para tentar comprometer a segurança da app ou para manipular serviços externos ligados às funções opcionais de cópia de segurança.',
            ],
          ],
        },
        {
          title: 'Contacto',
          paragraphs: [
            ['Para questões sobre estes termos, visite ', websiteLink, '.'],
          ],
        },
      ],
    },
    footer: {
      statement: 'Controlar o seu dinheiro não precisa de uma nuvem.',
      description: 'Cash IO · Finanças pessoais locais e simples.',
    },
  },
} satisfies Record<Locale, LandingContent>;
