import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Input,
  Navbar,
  NavbarItem,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Badge,
  Avatar,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Tooltip,
  Select,
  Checkbox,
  Spinner,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../components/ui';
import { Copy, Check } from 'lucide-react';
import { useParams } from '../components/ui/router';

// Code Block Component
const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="relative">
      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
        <code>{code}</code>
      </pre>
      <button 
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 rounded-md bg-background/80 hover:bg-background"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
};

// Property Table Component
interface PropDefinition {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
}

const PropsTable = ({ props }: { props: PropDefinition[] }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          <th className="text-left py-2">Prop</th>
          <th className="text-left py-2">Type</th>
          <th className="text-left py-2">Default</th>
          <th className="text-left py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop) => (
          <tr key={prop.name} className="border-b">
            <td className="py-2">{prop.name}</td>
            <td className="py-2 text-sm">
              <code>{prop.type}</code>
            </td>
            <td className="py-2"><code>{prop.defaultValue}</code></td>
            <td className="py-2">{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Component Detail Pages
export const ButtonDetailPage = () => {
  const buttonProps: PropDefinition[] = [
    {
      name: "variant",
      type: "default | secondary | outline | ghost | link | destructive",
      defaultValue: "default",
      description: "The visual style of the button"
    },
    {
      name: "size",
      type: "sm | md | lg | icon",
      defaultValue: "md",
      description: "The size of the button"
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Whether the button is disabled"
    },
    {
      name: "asChild",
      type: "boolean",
      defaultValue: "false",
      description: "Whether to render as a child element"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Button Component</h1>
        <p className="text-muted-foreground">
          Interactive button component with various styles and states
        </p>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Button Variants</h3>
            <div className="flex flex-wrap gap-2 p-4 border rounded-md">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-2 p-4 border rounded-md">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Button States</h3>
            <div className="flex flex-wrap gap-2 p-4 border rounded-md">
              <Button disabled>Disabled</Button>
              <Button>
                <Spinner size="sm" className="mr-2" />
                Loading
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={`import { Button } from 'typementor';

function Example() {
  return (
    <Button variant="primary" size="md" onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  );
}`} />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
        </CardHeader>
        <CardContent>
          <PropsTable props={buttonProps} />
        </CardContent>
      </Card>
    </main>
  );
};

export const CardDetailPage = () => {
  const cardProps: PropDefinition[] = [
    {
      name: "className",
      type: "string",
      defaultValue: "''",
      description: "Additional CSS classes to apply"
    }
  ];

  const cardHeaderProps: PropDefinition[] = [
    {
      name: "className",
      type: "string",
      defaultValue: "''",
      description: "Additional CSS classes to apply"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Card Component</h1>
        <p className="text-muted-foreground">
          Container component for organizing related content and actions
        </p>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Basic Card</h3>
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the content of the card.</p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Card with Footer</h3>
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Card with Footer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This card has a footer with actions.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost">Cancel</Button>
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'typementor';

function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the card.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}`} />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="card">
            <TabsList>
              <TabsTrigger value="card">Card</TabsTrigger>
              <TabsTrigger value="cardHeader">CardHeader</TabsTrigger>
              <TabsTrigger value="cardTitle">CardTitle</TabsTrigger>
              <TabsTrigger value="cardDescription">CardDescription</TabsTrigger>
              <TabsTrigger value="cardContent">CardContent</TabsTrigger>
              <TabsTrigger value="cardFooter">CardFooter</TabsTrigger>
            </TabsList>
            
            <TabsContent value="card">
              <PropsTable props={cardProps} />
            </TabsContent>
            
            <TabsContent value="cardHeader">
              <PropsTable props={cardHeaderProps} />
            </TabsContent>
            
            <TabsContent value="cardTitle">
              <PropsTable props={cardProps} />
            </TabsContent>
            
            <TabsContent value="cardDescription">
              <PropsTable props={cardProps} />
            </TabsContent>
            
            <TabsContent value="cardContent">
              <PropsTable props={cardProps} />
            </TabsContent>
            
            <TabsContent value="cardFooter">
              <PropsTable props={cardProps} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  );
};

export const InputDetailPage = () => {
  const inputProps: PropDefinition[] = [
    {
      name: "type",
      type: "string",
      defaultValue: "'text'",
      description: "The type of the input element"
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: "''",
      description: "Placeholder text for the input"
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Whether the input is disabled"
    },
    {
      name: "className",
      type: "string",
      defaultValue: "''",
      description: "Additional CSS classes to apply"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Input Component</h1>
        <p className="text-muted-foreground">
          Form control for user input with various states
        </p>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Basic Input</h3>
            <div className="space-y-4 p-4 border rounded-md">
              <Input placeholder="Default input" />
              <Input placeholder="Disabled input" disabled />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Input Types</h3>
            <div className="space-y-4 p-4 border rounded-md">
              <Input type="text" placeholder="Text input" />
              <Input type="password" placeholder="Password input" />
              <Input type="email" placeholder="Email input" />
              <Input type="number" placeholder="Number input" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Input with Button</h3>
            <div className="flex items-center space-x-2 p-4 border rounded-md">
              <Input placeholder="Search..." />
              <Button>Search</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={`import { Input } from 'typementor';

function Example() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your email" />
      <Input type="password" placeholder="Enter your password" />
    </div>
  );
}`} />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Props</CardTitle>
        </CardHeader>
        <CardContent>
          <PropsTable props={inputProps} />
        </CardContent>
      </Card>
    </main>
  );
};

// Component Detail Page Router
export const ComponentDetailPage = () => {
  const params = useParams();
  const componentId = params.componentId || '';
  
  // Map component IDs to their respective detail pages
  const componentPages: Record<string, React.ReactNode> = {
    'button': <ButtonDetailPage />,
    'card': <CardDetailPage />,
    'input': <InputDetailPage />,
    // Add more component detail pages as needed
  };
  
  // Render the appropriate component detail page or a fallback
  return componentPages[componentId] || (
    <main className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Component Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The component "{componentId}" could not be found.</p>
        </CardContent>
      </Card>
    </main>
  );
};