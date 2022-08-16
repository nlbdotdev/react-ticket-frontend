# Ticket Tracker

## Stack:
- Express
- Mongo
- React
- Redux

## View:
1. **Home:** Login, switch organizations, navigation
2. **Items:** Can view, filter, sort, edit, assign, remove and add bugs, (select bugs and multi edit)
3. **Task:** Can do all bug manipulations listed above, can also view task update history (blame log)
4. **Profile:** Can edit name, theme settings, time zone, update password
5. **Admin Panel:** Can adjust user roles within organization, invite or delete users

## Roles:
- Can edit no tasks, my tasks, tasks below me, or all tasks

## Database:
1. Accounts
2. Organizations
   - Tasks
   - Users

## Middleware:
- React Router
- Login with google / github
- UUID

# Other:
- Should move datetime stuff to backend
- Check out mantine for ui stuff
- Comments would be nice on tickets
- Guest accounts for submitting tickets / user reports, could share w/ indiedev community for free bug submits, would want to distinguish user reports w/ internal, and have a pipeline to (accept user reports)
- Standalone modules for users to submit (embedable in games for example) https://www.youtube.com/watch?v=zVnOcmiEdIE (include save file, include screenshot, custom strings)
- Notion integration (might be obselete, notion forms can do this. Github integration?)
- Attachments
- Repro steps
- Edit overwrite prevention (lock items when in edit?)
- Would be nice to save new tasks as draft
- Would be nice to be able to resize task grids seperators
- Pagination