import type { TinaField } from "tinacms";
export function autorFields() {
  return [
    {
      type: "string",
      name: "name",
      label: "Nome",
    },
    {
      type: "image",
      name: "image",
      label: "Fotografia",
    },
  ] as TinaField[];
}
export function autoresFields() {
  return [
    {
      type: "object",
      name: "ricardo",
      label: "ricardo",
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "image",
          name: "image",
          label: "image",
        },
      ],
    },
  ] as TinaField[];
}
export function categoriasFields() {
  return [
    {
      type: "object",
      name: "massagens",
      label: "massagens",
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "string",
          name: "description",
          label: "description",
        },
        {
          type: "boolean",
          name: "show_articles_count",
          label: "Mostrar contagem artigos",
        },
      ],
    },
    {
      type: "object",
      name: "servicos",
      label: "servicos",
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "string",
          name: "description",
          label: "description",
        },
        {
          type: "boolean",
          name: "show_articles_count",
          label: "show_articles_count",
        },
      ],
    },
    {
      type: "object",
      name: "tratamentos",
      label: "tratamentos",
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "string",
          name: "description",
          label: "description",
        },
        {
          type: "boolean",
          name: "show_articles_count",
          label: "show_articles_count",
        },
      ],
    },
    {
      type: "object",
      name: "blog",
      label: "blog",
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "string",
          name: "description",
          label: "description",
        },
        {
          type: "boolean",
          name: "show_articles_count",
          label: "show_articles_count",
        },
      ],
    },
  ] as TinaField[];
}
export function definicoes_config_ymlFields() {
  return [
    {
      type: "string",
      name: "google_analytics_tracking_id",
      label: "Google Analytics Tracking ID",
    },
    {
      type: "string",
      name: "title",
      label: "Título do Website",
    },
    {
      type: "string",
      name: "description",
      label: "Descrição do Website",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "url",
      label: "URL",
    },
    {
      type: "boolean",
      name: "use_authors",
      label: "Utilizar autores",
    },
    {
      type: "image",
      name: "brand_logo",
      label: "Logótipo",
    },
    {
      type: "string",
      name: "brand_name",
      label: "brand_name",
    },
    {
      type: "string",
      name: "header",
      label: "Texto principal",
    },
    {
      type: "string",
      name: "subheader",
      label: "Texto secundário",
    },
    {
      type: "image",
      name: "meta_image",
      label: "meta_image",
    },
    {
      type: "string",
      name: "twitter_username",
      label: "Nome de utilizador Twitter",
    },
    {
      type: "string",
      name: "facebook_page",
      label: "Página de Facebook ",
    },
    {
      type: "string",
      name: "email",
      label: "Email",
    },
    {
      type: "string",
      name: "linkedin_page",
      label: "URL Página Linkedin",
    },
    {
      type: "string",
      name: "instagram_username",
      label: "Nome de utilizador Instagram",
    },
    {
      type: "number",
      name: "whatsapp_number",
      label: "Número Whatsapp",
    },
    {
      type: "string",
      name: "help_one_title",
      label: "Título Secção Lado Esquerdo",
    },
    {
      type: "string",
      name: "help_one_content",
      label: "Conteúdo Secção Lado Esquerdo",
    },
    {
      type: "string",
      name: "help_one_button",
      label: "Título Botão Lado Esquerdo",
    },
    {
      type: "string",
      name: "help_one_link",
      label: "Link Botão Lado Esquerdo",
    },
    {
      type: "string",
      name: "help_two_title",
      label: "Título Secção Lado Central",
    },
    {
      type: "string",
      name: "help_two_content",
      label: "Conteúdo Secção Lado Central",
    },
    {
      type: "string",
      name: "help_two_button",
      label: "Título Botão Central",
    },
    {
      type: "string",
      name: "help_two_link",
      label: "Link Botão Central",
    },
    {
      type: "string",
      name: "help_three_title",
      label: "Titulo Botão Lado Direito",
    },
    {
      type: "string",
      name: "help_three_content",
      label: "Conteúdo Secção Lado Direito",
    },
    {
      type: "string",
      name: "help_three_button",
      label: "Titulo Botão Lado Direito",
    },
    {
      type: "string",
      name: "help_three_link",
      label: "Link Botão Lado Direito",
    },
  ] as TinaField[];
}
export function lista_de_autoresFields() {
  return [] as TinaField[];
}
export function massagemFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "category",
      label: "category",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "string",
      name: "short_description",
      nameOverride: "short-description",
      label: "short-description",
    },
  ] as TinaField[];
}
export function servicoFields() {
  return [
    {
      type: "string",
      name: "layout",
      label: "layout",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "category",
      label: "category",
    },
    {
      type: "string",
      name: "subcategory",
      label: "subcategory",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "string",
      name: "short_description",
      nameOverride: "short-description",
      label: "short-description",
    },
  ] as TinaField[];
}
