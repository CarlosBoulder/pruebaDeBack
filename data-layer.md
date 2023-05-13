# Robots App

## Data layer

### Data

- Collection of robots

  - Robot:
    - id: string
    - name: string
    - speed: number
    - endurance: number
    - created: string
    - img_source: string

  ## Modifications

  - loadRobots()
  - addRobot()
  - removeRobot()
  - updateRobot()

  ## Components

  ### Store

  #### State

  - Collection of robots

  #### RobotsReducer

  - loadRobots()
  - addRobot()
  - removeRobot()
  - updateRobot()

  ## App

  - Receives an external collection of robots
  - Receives a dispatch()
  - Shows the title inside a heading
  - Renders RobotsForm component
  - Renders RobotsList component

  ## List

  - Receives a collection of robots
  - Renders as many RobotCard as robots are in the collection

  ## Form

  - State:
    - Robot
  - handleSubmit()
  - Receives dispatch()
  - Shows an input text for the name of the Robot
  - Shows an input number for the speed of the Robot
  - Shows an input number for the endurance of the Robot
  - Shows an input text for the image source of the Robot
  - Renders a Button component
    - text: "add"
    - actionOnClick: handleSubmit

  ## Card

  - Receives a Robot
  - Receives dispatch()
  - handleClick()
  - Shows the Robot's name inside a heading
  - Shows the Robot's speed
  - Shows the Robot's endurance
  - Shows the Robot's creation date
  - Shows the Robot's image
  - Renders a Button with:
    - text: "delete"
    - actionOnClick: handleClick

  ## Button

  - Receives a text
  - Receives an action on click
  - Shows a button with the received text
  - Calls the received action when the button is clicked
