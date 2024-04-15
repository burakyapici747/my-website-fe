'use client'
import React from 'react';
import Links from "./links/Links";
import {Container, Flex, Heading, Text, Link, Button, Dialog, TextField} from "@radix-ui/themes";

const Navbar = () => {
    return (
        <>
            <nav className="w-full">
                <Container className="navbar-container" size="3" style={{color: 'rgba(0, 0, 0, 0.55)'}}>
                    <Flex display="flex" direction="row" wrap="wrap" p="2">
                        <Flex className="flex items-center mr-5" display="flex" direction="row" align="center" mr="5">
                            <Heading as="h1">
                                <Link href="/">
                                    <Flex className="group" display="flex" direction="row" align="center" gap="2">
                                        <svg className="w-4 text-white group-hover:rotate-[20deg]" fill="white" width="14px" height="14px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M12,72A12,12,0,1,0,24,84,12.0119,12.0119,0,0,0,12,72Z"/>
                                                <path d="M12,36a6,6,0,0,0,0,12A36.0393,36.0393,0,0,1,48,84a6,6,0,0,0,12,0A48.0512,48.0512,0,0,0,12,36Z"/>
                                                <path d="M12,0a6,6,0,0,0,0,12A72.0788,72.0788,0,0,1,84,84a6,6,0,0,0,12,0A84.0981,84.0981,0,0,0,12,0Z"/>
                                            </g>
                                        </svg>
                                        <Text as="p" color="gray" size="3" weight="bold">Burak Yapici's Blog</Text>
                                    </Flex>
                                </Link>
                            </Heading>
                        </Flex>
                        <Links/>
                        <Flex display="flex" direction="row" justify="end" align="center" gap="2">
                            <Dialog.Root>
                                <Dialog.Trigger>
                                    <Link weight="bold" color="sky">Login</Link>
                                </Dialog.Trigger>

                                <Dialog.Content style={{ maxWidth: 450 }}>
                                    <Dialog.Title>Edit profile</Dialog.Title>
                                    <Dialog.Description size="2" mb="4">
                                        Make changes to your profile.
                                    </Dialog.Description>

                                    <Flex direction="column" gap="3">
                                        <label>
                                            <Text as="div" size="2" mb="1" weight="bold">
                                                Name
                                            </Text>
                                            <TextField.Input
                                                defaultValue="Freja Johnsen"
                                                placeholder="Enter your full name"
                                            />
                                        </label>
                                        <label>
                                            <Text as="div" size="2" mb="1" weight="bold">
                                                Email
                                            </Text>
                                            <TextField.Input
                                                defaultValue="freja@example.com"
                                                placeholder="Enter your email"
                                            />
                                        </label>
                                    </Flex>

                                    <Flex gap="3" mt="4" justify="end">
                                        <Dialog.Close>
                                            <Button variant="soft" color="gray">
                                                Cancel
                                            </Button>
                                        </Dialog.Close>
                                        <Dialog.Close>
                                            <Button>Save</Button>
                                        </Dialog.Close>
                                    </Flex>
                                </Dialog.Content>
                            </Dialog.Root>

                            <Link weight="bold" color="sky" href="">Sign up</Link>
                        </Flex>
                    </Flex>
                </Container>
                <div className="w-full site-navbar-container flex flex-wrap"></div>
            </nav>
        </>
    )
}

export default Navbar;