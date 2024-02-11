'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from '@nextui-org/react'

export default function UserCard() {
  const [hasProposed, setHasProposed] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
    >
      <Card className="max-w-[800px] h-[300px] bg-slate-900">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="lg"
              src="https://github.com/Shinomar.png"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Friend Ly
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @friendly
              </h5>
            </div>
          </div>
          <Button
            className={
              hasProposed
                ? 'bg-transparent text-foreground border-default-200'
                : ''
            }
            color="primary"
            radius="full"
            size="sm"
            variant={hasProposed ? 'bordered' : 'solid'}
            onPress={() => setHasProposed(!hasProposed)}
          >
            {hasProposed ? 'Unpropose' : 'Propose'}
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-2 text-small text-default-800">
          <p>
            I am a very friendly and great guy to be with. I am a great
            companion
          </p>
          <span className="pt-2">
            #LetsGetMarried
            <span className="py-2" aria-label="computer" role="img">
              💻
            </span>
          </span>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-600 text-small">97.1K</p>
            <p className="text-default-400 text-small">Proposals received</p>
          </div>

          <div className="flex gap-1">
            <p className="font-semibold text-default-600 text-small">4</p>
            <p className=" text-default-400 text-small">in consideration</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
