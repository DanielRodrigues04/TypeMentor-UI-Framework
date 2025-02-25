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
import { 
  AlertCircle, 
  Bell, 
  Check, 
  Copy, 
  Eye, 
  EyeOff, 
  Info, 
  Search, 
  Settings, 
  User, 
  X,
  ChevronRight
} from 'lucide-react';
import { Link } from '../components/ui/router';

const ComponentShowcase = () => {
  const [activeTab, setActiveTab] = useState('buttons');
  const [modalOpen, setModalOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [loading, setLoading] = useState(false);

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Component Showcase</h1>
        <p className="text-muted-foreground">
          Interactive examples of all TypeMentor UI components
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="mb-4 flex flex-wrap">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="inputs">Inputs</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="data">Data Display</TabsTrigger>
          <TabsTrigger value="overlays">Overlays</TabsTrigger>
        </TabsList>
        
        <TabsContent value="buttons">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>
                Interactive buttons with various styles, sizes, and states
              </CardDescription>
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
                  <Button onClick={simulateLoading}>
                    {loading ? <Spinner size="sm" className="mr-2" /> : null}
                    {loading ? 'Loading...' : 'Click to Load'}
                  </Button>
                  <Button className="relative">
                    Notifications
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                      {notificationCount}
                    </Badge>
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Button with Icons</h3>
                <div className="flex flex-wrap gap-2 p-4 border rounded-md">
                  <Button>
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </Button>
                  <Button variant="outline">
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Button>
                  <Button variant="secondary">
                    <Bell className="mr-2 h-4 w-4" /> Notifications
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/components/button">
                <Button variant="outline">View Button Documentation</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="inputs">
          <Card>
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
              <CardDescription>
                Form controls for user input with validation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Text Inputs</h3>
                <div className="space-y-4 p-4 border rounded-md">
                  <Input placeholder="Default input" />
                  <Input placeholder="Disabled input" disabled />
                  <div className="flex items-center space-x-2">
                    <Input placeholder="With button" />
                    <Button>Submit</Button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Input with Icon</h3>
                <div className="space-y-4 p-4 border rounded-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-10" placeholder="Search..." />
                  </div>
                  
                  <div className="relative">
                    <Input 
                      type={passwordVisible ? "text" : "password"} 
                      placeholder="Password" 
                      className="pr-10"
                    />
                    <button 
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Checkboxes</h3>
                <div className="space-y-2 p-4 border rounded-md">
                  <Checkbox label="Default checkbox" />
                  <Checkbox label="Checked checkbox" defaultChecked />
                  <Checkbox label="Disabled checkbox" disabled />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Select</h3>
                <div className="p-4 border rounded-md">
                  <Select 
                    options={[
                      { value: "option1", label: "Option 1" },
                      { value: "option2", label: "Option 2" },
                      { value: "option3", label: "Option 3" },
                      { value: "option4", label: "Option 4", disabled: true },
                    ]}
                    placeholder="Select an option"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="cards">
          <Grid cols={1} colsMd={2} gap={6}>
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>A simple card with header and content</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is a basic card component that can be used to display content in a contained area.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Card with Footer</CardTitle>
                <CardDescription>A card with actions in the footer</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card includes a footer section with action buttons.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost">Cancel</Button>
                <Button>Save</Button>
              </CardFooter>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>A card with interactive elements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>This card contains interactive elements like inputs and buttons.</p>
                  <Input placeholder="Enter your name" />
                  <div className="flex space-x-2">
                    <Input placeholder="Enter your email" />
                    <Button>Subscribe</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  By subscribing, you agree to our terms and conditions.
                </p>
              </CardFooter>
            </Card>
          </Grid>
        </TabsContent>
        
        <TabsContent value="navigation">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Navbar Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md overflow-hidden mb-6">
                <Navbar className="shadow-none">
                  <NavbarItem href="#" active>Home</NavbarItem>
                  <NavbarItem href="#">Products</NavbarItem>
                  <NavbarItem href="#">Services</NavbarItem>
                  <NavbarItem href="#">Contact</NavbarItem>
                </Navbar>
              </div>
              
              <div className="border rounded-md overflow-hidden">
                <Navbar 
                  className="shadow-none"
                  logo={
                    <div className="flex items-center space-x-2">
                      <Settings className="h-5 w-5 text-primary" />
                      <span className="font-bold">Brand Logo</span>
                    </div>
                  }
                >
                  <NavbarItem href="#" active>Dashboard</NavbarItem>
                  <NavbarItem href="#">Analytics</NavbarItem>
                  <NavbarItem href="#">Settings</NavbarItem>
                  <NavbarItem>
                    <Button size="sm">Login</Button>
                  </NavbarItem>
                </Navbar>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tabs Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Account</TabsTrigger>
                  <TabsTrigger value="tab2">Password</TabsTrigger>
                  <TabsTrigger value="tab3">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="p-4 border rounded-md mt-4">
                  <h3 className="font-medium mb-2">Account Settings</h3>
                  <p>Manage your account information and preferences.</p>
                </TabsContent>
                <TabsContent value="tab2" className="p-4 border rounded-md mt-4">
                  <h3 className="font-medium mb-2">Password Settings</h3>
                  <p>Update your password and security preferences.</p>
                </TabsContent>
                <TabsContent value="tab3" className="p-4 border rounded-md mt-4">
                  <h3 className="font-medium mb-2">General Settings</h3>
                  <p>Configure application settings and preferences.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="feedback">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert variant="info" title="Information">
                This is an informational message.
              </Alert>
              <Alert variant="success" title="Success">
                Operation completed successfully.
              </Alert>
              <Alert variant="warning" title="Warning">
                Please be careful with this action.
              </Alert>
              <Alert variant="error" title="Error">
                An error occurred during the process.
              </Alert>
              
              <Alert 
                variant="info" 
                title="Dismissible Alert" 
                onClose={() => alert("Alert dismissed")}
              >
                This alert can be dismissed by clicking the close button.
              </Alert>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Loading Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-8 p-4 border rounded-md">
                <div className="text-center">
                  <Spinner size="sm" />
                  <p className="mt-2 text-sm">Small</p>
                </div>
                <div className="text-center">
                  <Spinner />
                  <p className="mt-2 text-sm">Default</p>
                </div>
                <div className="text-center">
                  <Spinner size="lg" />
                  <p className="mt-2 text-sm">Large</p>
                </div>
                <div className="text-center">
                  <Spinner variant="primary" />
                  <p className="mt-2 text-sm">Primary</p>
                </div>
                <div className="text-center">
                  <Spinner variant="secondary" />
                  <p className="mt-2 text-sm">Secondary</p>
                </div>
                
                <div className="ml-auto">
                  <Button onClick={simulateLoading} disabled={loading}>
                    {loading ? (
                      <>
                        <Spinner size="sm" className="mr-2" />
                        Loading...
                      </>
                    ) : (
                      "Simulate Loading"
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="layout">
          <Card>
            <CardHeader>
              <CardTitle>Grid Layout</CardTitle>
              <CardDescription>Responsive grid system for layout</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Basic Grid</h3>
                <Grid cols={1} colsMd={2} colsLg={4} gap={4}>
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-muted p-4 rounded-md text-center">
                      Item {item}
                    </div>
                  ))}
                </Grid>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Grid with Different Column Spans</h3>
                <Grid cols={1} colsMd={6} gap={4}>
                  <GridItem span={1} spanMd={2} className="bg-muted p-4 rounded-md text-center">
                    Span 2
                  </GridItem>
                  <GridItem span={1} spanMd={4} className="bg-muted p-4 rounded-md text-center">
                    Span 4
                  </GridItem>
                  <GridItem span={1} spanMd={3} className="bg-muted p-4 rounded-md text-center">
                    Span 3
                  </GridItem>
                  <GridItem span={1} spanMd={3} className="bg-muted p-4 rounded-md text-center">
                    Span 3
                  </GridItem>
                  <GridItem span={1} spanMd={6} className="bg-muted p-4 rounded-md text-center">
                    Span 6 (Full Width)
                  </GridItem>
                </Grid>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Nested Grid</h3>
                <Grid cols={1} colsMd={2} gap={4}>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Parent Grid Item 1</h4>
                    <Grid cols={2} gap={2}>
                      <div className="bg-background p-2 rounded-md text-center">Nested 1</div>
                      <div className="bg-background p-2 rounded-md text-center">Nested 2</div>
                    </Grid>
                  </div>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Parent Grid Item 2</h4>
                    <Grid cols={2} gap={2}>
                      <div className="bg-background p-2 rounded-md text-center">Nested 1</div>
                      <div className="bg-background p-2 rounded-md text-center">Nested 2</div>
                    </Grid>
                  </div>
                </Grid>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="data">
          <Grid cols={1} colsMd={2} gap={6}>
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 p-4 border rounded-md">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 p-4 border rounded-md">
                  <Avatar 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="User" 
                    size="sm"
                  />
                  <Avatar 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="User" 
                  />
                  <Avatar 
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="User" 
                    size="lg"
                  />
                  <Avatar 
                    alt="John Doe" 
                    size="xl"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger id="item-1">
                      What is TypeMentor?
                    </AccordionTrigger>
                    <AccordionContent data-value="item-1">
                      TypeMentor is a library of responsive and generic UI components for TypeScript projects.
                      It provides a set of reusable components that can be used to build user interfaces quickly and efficiently.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger id="item-2">
                      How to install?
                    </AccordionTrigger>
                    <AccordionContent data-value="item-2">
                      You can install TypeMentor using npm or yarn:
                      <pre className="bg-muted p-2 rounded-md mt-2">npm install typementor</pre>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger id="item-3">
                      Is it accessible?
                    </AccordionTrigger>
                    <AccordionContent data-value="item-3">
                      Yes, all components in TypeMentor are designed with accessibility in mind.
                      They follow WAI-ARIA guidelines and are keyboard navigable.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
        </TabsContent>
        
        <TabsContent value="overlays">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Tooltips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-8 p-4 border rounded-md">
                <Tooltip content="This is a tooltip" position="top">
                  <Button variant="outline">Top Tooltip</Button>
                </Tooltip>
                
                <Tooltip content="Right tooltip" position="right">
                  <Button variant="outline">Right Tooltip</Button>
                </Tooltip>
                
                <Tooltip content="Bottom tooltip" position="bottom">
                  <Button variant="outline">Bottom Tooltip</Button>
                </Tooltip>
                
                <Tooltip content="Left tooltip" position="left">
                  <Button variant="outline">Left Tooltip</Button>
                </Tooltip>
                
                <Tooltip 
                  content={
                    <div className="p-1">
                      <p className="font-medium">Rich Tooltip</p>
                      <p className="text-xs">With multiple lines of content</p>
                    </div>
                  } 
                  position="top"
                >
                  <Button variant="outline">Rich Tooltip</Button>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Modal Dialog</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 border rounded-md">
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalBody>
                    <p className="mb-4">This is a modal dialog box. It can be used to display information or capture user input.</p>
                    <Input placeholder="Enter your name" className="mb-4" />
                    <Select 
                      options={[
                        { value: "option1", label: "Option 1" },
                        { value: "option2", label: "Option 2" },
                      ]}
                      placeholder="Select an option"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
                    <Button onClick={() => setModalOpen(false)}>Save</Button>
                  </ModalFooter>
                </Modal>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default ComponentShowcase;