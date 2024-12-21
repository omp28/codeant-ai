import React from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import { useNavigate } from "react-router-dom";
import { AuthTabsProps, AuthProvider } from "../../types/auth";

const Authentication: React.FC<AuthTabsProps> = ({ defaultTab = "SAAS" }) => {
  const navigate = useNavigate();

  const SAAS: AuthProvider[] = [
    {
      label: "Sign in with Github",
      path: "/icons/github.png",
    },
    {
      label: "Sign in with Bitbucket",
      path: "/icons/bitbucket.png",
    },
    {
      label: "Sign in with Azure Devops",
      path: "/icons/azure_devops.png",
    },
    {
      label: "Sign in with GitLab",
      path: "/icons/gitlab.png",
    },
  ];

  const selfHosted: AuthProvider[] = [
    {
      label: "Sign in with Gitlab",
      path: "/icons/gitlab.png",
    },
    {
      label: "Sign in with SSO",
      path: "/icons/sso.png",
    },
  ];

  const displayButton = (button: AuthProvider, index: number) => (
    <button
      className="border border-[#D8DAE5] p-3 rounded-md flex gap-4 w-[98%] md:w-[80%] justify-center hover:bg-[#E9EAEB] max-w-[446px] md:text-sm lg:text-lg"
      onClick={() => navigate("/")}
      key={index}
      type="button"
    >
      <img src={button.path} alt={button.label} />
      <span className="font-bold">{button.label}</span>
    </button>
  );

  return (
    <Tabs defaultValue={defaultTab}>
      <TabsList className="bg-[#FAFAFA] flex border mb-8 rounded-lg mx-3 md:mx-auto md:w-[95%] max-w-[624px]">
        <TabsTrigger
          className="flex-1 p-3 active:bg-[#1570EF] tabs"
          value="SAAS"
        >
          SAAS
        </TabsTrigger>
        <TabsTrigger className="flex-1 p-3 tabs" value="SELF_HOSTED">
          Self Hosted
        </TabsTrigger>
      </TabsList>

      <hr />

      <div className="m-6">
        <TabsContent
          value="SAAS"
          className="flex flex-col justify-center items-center gap-3"
        >
          {SAAS.map((button, index) => displayButton(button, index))}
        </TabsContent>
        <TabsContent
          value="SELF_HOSTED"
          className="flex flex-col justify-center items-center gap-3"
        >
          {selfHosted.map((button, index) => displayButton(button, index))}
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default Authentication;
