import { defineConfig } from "tinacms";

import { autorFields } from "./templates";
import { autoresFields } from "./templates";
import { categoriasFields } from "./templates";
import { definicoes_config_ymlFields } from "./templates";
import { lista_de_autoresFields } from "./templates";
import { massagemFields } from "./templates";
import { servicoFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "yml",
        label: "Categorias Conteúdo",
        name: "categorias_conteudo",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "category_list",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "yml",
        label: "Autores",
        name: "autores",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "authors",
        },
        fields: [
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
        ],
      },
      {
        format: "yml",
        label: "Definições gerais",
        name: "definicoes_gerais",
        path: "/",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_config",
        },
        fields: [
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
        ],
      },
    ],
  },
});
