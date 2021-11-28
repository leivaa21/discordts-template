# Commands

- Commands has to follow the interface Command (in src/domain/interfaces)
- Always set the name as the command (in LowerCase)

> - Example: if command is !ping, the command.name should be ping
>   that will do that you can execute !PING and still running the command
>   (see commandHandler in Events)
> - Hints: in the command _!ping_ you have a sample of basic message text command
>   Also in _!prefix_ you have a sample of config modifying command!
